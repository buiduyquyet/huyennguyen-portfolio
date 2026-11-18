import type { CollectionConfig } from 'payload'

/** Brief khách gửi từ form liên hệ. Chỉ tạo được qua server action, chỉ admin đọc được. */
export const Briefs: CollectionConfig = {
  slug: 'briefs',
  labels: { singular: 'Brief', plural: 'Brief khách gửi' },
  defaultSort: '-createdAt',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'email', 'service', 'emailSent', 'createdAt'],
    description: 'Lưu lại mọi brief gửi từ form liên hệ, kể cả khi gửi mail thất bại.',
  },
  access: {
    create: () => false,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', label: 'Họ và tên', type: 'text', required: true },
        { name: 'company', label: 'Doanh nghiệp / Thương hiệu', type: 'text' },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'phone', label: 'Số điện thoại / Zalo', type: 'text' },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'service', label: 'Dịch vụ', type: 'text' },
        { name: 'budget', label: 'Ngân sách', type: 'text' },
        { name: 'timeline', label: 'Thời gian', type: 'text' },
      ],
    },
    { name: 'message', label: 'Nhu cầu / Brief', type: 'textarea', required: true },
    {
      name: 'emailSent',
      label: 'Đã gửi mail',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar', readOnly: true },
    },
  ],
}
