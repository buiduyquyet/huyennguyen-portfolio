'use client'

import React, { useState } from 'react'
import { submitBrief } from '@/app/(frontend)/actions'

type Opt = { label: string; id?: string | null }

export function ContactForm({
  serviceOptions,
  budgetOptions,
  timelineOptions,
  messagePlaceholder,
  submitLabel,
  note,
  successMessage,
}: {
  serviceOptions: Opt[]
  budgetOptions: Opt[]
  timelineOptions: Opt[]
  messagePlaceholder?: string | null
  submitLabel?: string | null
  note?: string | null
  successMessage?: string | null
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await submitBrief(new FormData(form))
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setError(res.error)
        setStatus('error')
      }
    } catch {
      setError('Gửi không thành công, vui lòng thử lại hoặc liên hệ trực tiếp qua email.')
      setStatus('error')
    }
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
      {/* Honeypot chống spam: ẩn với người dùng */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Đang gửi...' : submitLabel || 'Send Your Brief'}{' '}
        <span className="arr">→</span>
      </button>
      {note && <p className="f-note">{note}</p>}
      {status === 'sent' && (
        <div className="f-msg" style={{ display: 'block' }}>
          {successMessage || '✓ Đã gửi brief! Mình sẽ phản hồi trong 24–48 giờ làm việc.'}
        </div>
      )}
      {status === 'error' && (
        <div className="f-msg" style={{ display: 'block', borderColor: '#ff6b6b', color: '#ff6b6b' }}>
          {error}
        </div>
      )}
    </form>
  )
}
