'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export type BriefResult = { ok: true } | { ok: false; error: string }

const MAX = { short: 200, message: 5000 }

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function submitBrief(formData: FormData): Promise<BriefResult> {
  const g = (k: string, max = MAX.short) => String(formData.get(k) ?? '').trim().slice(0, max)

  // Honeypot: người thật không thấy ô này, bot thường điền vào
  if (g('website')) return { ok: true }

  const data = {
    name: g('name'),
    company: g('company'),
    email: g('email'),
    phone: g('phone'),
    service: g('service'),
    budget: g('budget'),
    timeline: g('timeline'),
    message: g('message', MAX.message),
  }

  if (!data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, error: 'Vui lòng điền đầy đủ họ tên, email hợp lệ và mô tả nhu cầu.' }
  }

  const payload = await getPayload({ config })

  const brief = await payload.create({
    collection: 'briefs',
    data: { ...data, emailSent: false },
    overrideAccess: true,
  })

  const home = await payload.findGlobal({ slug: 'home', depth: 0 })
  const to = home.contact?.briefEmail || process.env.SMTP_USER
  if (!to) {
    payload.logger.error('Chưa cấu hình "Email nhận brief" trong CMS')
    return { ok: true } // brief đã lưu trong CMS
  }

  const rows: [string, string][] = [
    ['Họ tên', data.name],
    ['Doanh nghiệp', data.company],
    ['Email', data.email],
    ['SĐT/Zalo', data.phone],
    ['Dịch vụ', data.service],
    ['Ngân sách', data.budget],
    ['Thời gian', data.timeline],
  ]
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nNhu cầu:\n${data.message}`
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#141414">
      <h2 style="margin:0 0 16px">Brief mới từ website</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="color:#777;vertical-align:top">${k}</td><td><b>${escapeHtml(v || '—')}</b></td></tr>`,
          )
          .join('')}
      </table>
      <h3 style="margin:20px 0 8px">Nhu cầu</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(data.message)}</p>
    </div>`

  try {
    await payload.sendEmail({
      to,
      replyTo: `${data.name} <${data.email}>`,
      subject: `[Brief] ${data.service} — ${data.company || data.name}`,
      text,
      html,
    })
    await payload.update({
      collection: 'briefs',
      id: brief.id,
      data: { emailSent: true },
      overrideAccess: true,
    })
  } catch (err) {
    // Brief vẫn nằm trong CMS nên không báo lỗi cho khách
    payload.logger.error({ err, msg: 'Gửi mail brief thất bại' })
  }

  return { ok: true }
}
