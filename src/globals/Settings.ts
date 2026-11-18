import type { GlobalConfig } from 'payload'
import { textField } from '../fields/shared'
import { HEX_COLOR, THEME_COLORS } from '../lib/theme'

const linkFields = [
  {
    type: 'row' as const,
    fields: [textField('label', 'Nhãn', true), textField('href', 'Liên kết', true)],
  },
]

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Cài đặt chung',
  admin: { description: 'SEO, logo, menu điều hướng và footer.' },
  access: { read: () => true },
  fields: [
    {
      type: 'collapsible',
      label: 'SEO',
      fields: [
        textField('siteTitle', 'Tiêu đề trang (thẻ <title>)'),
        { name: 'siteDescription', label: 'Mô tả (meta description)', type: 'textarea' },
      ],
    },
    {
      type: 'collapsible',
      label: 'Màu sắc',
      admin: {
        description: 'Để trống ô nào thì ô đó dùng màu mặc định của thiết kế.',
      },
      fields: [
        {
          name: 'theme',
          type: 'group',
          label: false,
          fields: THEME_COLORS.map((c) => ({
            name: c.name,
            label: c.label,
            type: 'text' as const,
            validate: (v: string | null | undefined) =>
              !v || HEX_COLOR.test(v.trim()) || 'Mã màu dạng #rrggbb, ví dụ #c8ff00',
            admin: {
              description: c.description,
              placeholder: c.default,
              components: { Field: '/components/admin/ColorField#ColorField' },
            },
          })),
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Logo',
      fields: [
        {
          type: 'row',
          fields: [
            textField('logoLeft', 'Phần trước dấu chấm'),
            textField('logoRight', 'Phần sau dấu chấm'),
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Menu điều hướng',
      fields: [
        {
          name: 'navLinks',
          label: 'Liên kết menu',
          type: 'array',
          fields: linkFields,
        },
        {
          name: 'navCta',
          label: 'Nút CTA trên menu',
          type: 'group',
          fields: linkFields,
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Footer',
      fields: [
        {
          name: 'footerText',
          label: 'Dòng bản quyền',
          type: 'text',
          admin: { description: 'Hiển thị sau "© {năm hiện tại}"' },
        },
        {
          name: 'footerLinks',
          label: 'Liên kết footer',
          type: 'array',
          fields: linkFields,
        },
      ],
    },
  ],
}
