import type { Field } from 'payload'

/** Mô tả cú pháp định dạng dùng chung cho các ô văn bản */
export const MARKUP_HINT =
  'Định dạng: xuống dòng = ngắt dòng · **chữ đậm** · [[chữ màu lime]] · {{chữ nghiêng mờ (ghi chú)}}'

export const markupField = (
  name: string,
  label: string,
  opts: { required?: boolean; description?: string } = {},
): Field => ({
  name,
  label,
  type: 'textarea',
  required: opts.required,
  admin: { description: opts.description ?? MARKUP_HINT },
})

export const textField = (name: string, label: string, required = false): Field => ({
  name,
  label,
  type: 'text',
  required,
})

/** Mảng các nhãn đơn giản (tag) */
export const tagsField = (name: string, label: string): Field => ({
  name,
  label,
  type: 'array',
  labels: { singular: 'Tag', plural: 'Tags' },
  admin: { initCollapsed: true },
  fields: [{ name: 'label', label: 'Nhãn', type: 'text', required: true }],
})

/** Eyebrow + tiêu đề + mô tả cho đầu mỗi section */
export const sectionHeadFields = (withSub = true): Field[] => [
  textField('eyebrow', 'Eyebrow (dòng nhỏ phía trên)'),
  markupField('title', 'Tiêu đề'),
  ...(withSub ? [markupField('subtitle', 'Mô tả ngắn')] : []),
]
