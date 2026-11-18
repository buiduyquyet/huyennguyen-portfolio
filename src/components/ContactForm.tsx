'use client'

import React, { useState } from 'react'

type Opt = { label: string; id?: string | null }

export function ContactForm({
  email,
  serviceOptions,
  budgetOptions,
  timelineOptions,
  messagePlaceholder,
  submitLabel,
  note,
  successMessage,
}: {
  email: string
  serviceOptions: Opt[]
  budgetOptions: Opt[]
  timelineOptions: Opt[]
  messagePlaceholder?: string | null
  submitLabel?: string | null
  note?: string | null
  successMessage?: string | null
}) {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const g = (k: string) => String(f.get(k) ?? '')
    const subject = `[Brief] ${g('service')} — ${g('company') || g('name')}`
    const body = `Họ tên: ${g('name')}
Doanh nghiệp: ${g('company')}
Email: ${g('email')}
SĐT/Zalo: ${g('phone')}
Dịch vụ: ${g('service')}
Ngân sách: ${g('budget')}
Thời gian: ${g('timeline')}

Nhu cầu:
${g('message')}`
    setSent(true)
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const options = (list: Opt[]) =>
    list.map((o, i) => (
      <option key={o.id ?? i} value={o.label}>
        {o.label}
      </option>
    ))

  return (
    <form id="briefForm" onSubmit={onSubmit}>
      <div className="f-row">
        <div className="f-group">
          <label>Họ và tên *</label>
          <input type="text" name="name" required />
        </div>
        <div className="f-group">
          <label>Doanh nghiệp / Thương hiệu</label>
          <input type="text" name="company" />
        </div>
      </div>
      <div className="f-row">
        <div className="f-group">
          <label>Email *</label>
          <input type="email" name="email" required />
        </div>
        <div className="f-group">
          <label>Số điện thoại / Zalo</label>
          <input type="tel" name="phone" />
        </div>
      </div>
      <div className="f-row">
        <div className="f-group">
          <label>Bạn cần hỗ trợ</label>
          <select name="service" id="serviceSelect">
            {options(serviceOptions)}
          </select>
        </div>
        <div className="f-group">
          <label>Ngân sách dự kiến</label>
          <select name="budget">{options(budgetOptions)}</select>
        </div>
      </div>
      <div className="f-group">
        <label>Thời gian mong muốn bắt đầu</label>
        <select name="timeline">{options(timelineOptions)}</select>
      </div>
      <div className="f-group">
        <label>Mô tả nhu cầu / Brief *</label>
        <textarea name="message" required placeholder={messagePlaceholder ?? undefined}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        {submitLabel || 'Send Your Brief'} <span className="arr">→</span>
      </button>
      {note && <p className="f-note">{note}</p>}
      <div className="f-msg" style={sent ? { display: 'block' } : undefined}>
        {successMessage}
      </div>
    </form>
  )
}
