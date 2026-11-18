import type { Field, GlobalConfig } from 'payload'
import { markupField, sectionHeadFields, tagsField, textField } from '../fields/shared'

const optionsField = (name: string, label: string): Field => ({
  name,
  label,
  type: 'array',
  admin: { initCollapsed: true },
  fields: [textField('label', 'Lựa chọn', true)],
})

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Trang chủ',
  admin: { description: 'Toàn bộ nội dung các section trên trang chủ.' },
  access: { read: () => true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        /* ---------------- HERO ---------------- */
        {
          name: 'hero',
          label: 'Hero',
          fields: [
            textField('eyebrow', 'Eyebrow'),
            textField('line1', 'Tiêu đề — dòng 1 (chữ trắng)'),
            textField('line2', 'Tiêu đề — dòng 2 (chữ viền)'),
            textField('line3', 'Tiêu đề — dòng 3 (chữ lime)'),
            markupField('subtitle', 'Mô tả'),
            {
              type: 'row',
              fields: [
                textField('primaryCtaLabel', 'Nút chính — nhãn'),
                textField('primaryCtaHref', 'Nút chính — liên kết'),
              ],
            },
            {
              type: 'row',
              fields: [
                textField('secondaryCtaLabel', 'Nút phụ — nhãn'),
                textField('secondaryCtaHref', 'Nút phụ — liên kết'),
              ],
            },
            {
              name: 'meta',
              label: 'Thông tin nhanh (dưới nút)',
              type: 'array',
              fields: [
                {
                  name: 'pulseDot',
                  label: 'Hiện chấm xanh nhấp nháy',
                  type: 'checkbox',
                  defaultValue: false,
                },
                markupField('text', 'Nội dung', { required: true }),
              ],
            },
            {
              name: 'marquee',
              label: 'Dải chữ chạy (marquee)',
              type: 'array',
              admin: { initCollapsed: true },
              fields: [textField('label', 'Nội dung', true)],
            },
          ],
        },

        /* ---------------- STATS ---------------- */
        {
          name: 'stats',
          label: 'Số liệu',
          fields: [
            {
              name: 'items',
              label: 'Số liệu',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'value',
                      label: 'Con số',
                      type: 'number',
                      required: true,
                      admin: { width: '25%' },
                    },
                    { ...textField('label', 'Mô tả', true), admin: { width: '75%' } } as Field,
                  ],
                },
              ],
            },
          ],
        },

        /* ---------------- ABOUT ---------------- */
        {
          name: 'about',
          label: 'About',
          fields: [
            {
              name: 'photo',
              label: 'Ảnh chân dung (tỉ lệ 4:5)',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'photoUrl',
              label: 'Hoặc URL ảnh',
              type: 'text',
              admin: { description: 'Dùng khi chưa upload ảnh ở trên.' },
            },
            textField('photoAlt', 'Alt ảnh'),
            textField('tag', 'Nhãn trên ảnh'),
            textField('eyebrow', 'Eyebrow'),
            textField('heading', 'Lời chào'),
            textField('role', 'Vai trò'),
            {
              name: 'paragraphs',
              label: 'Đoạn giới thiệu',
              type: 'array',
              fields: [markupField('text', 'Đoạn văn', { required: true })],
            },
            markupField('quote', 'Trích dẫn'),
            {
              name: 'motto',
              label: 'Motto',
              type: 'array',
              fields: [
                markupField('text', 'Nội dung', {
                  required: true,
                  description: 'Phần **in đậm** sẽ có màu lime. VD: **Think** Strategically',
                }),
              ],
            },
          ],
        },

        /* ---------------- WHY ---------------- */
        {
          name: 'why',
          label: 'Why',
          fields: [
            ...sectionHeadFields(),
            {
              name: 'items',
              label: 'Lý do',
              type: 'array',
              fields: [
                textField('title', 'Tiêu đề', true),
                textField('subtitle', 'Tiêu đề phụ (tiếng Việt)'),
                markupField('description', 'Mô tả'),
              ],
            },
          ],
        },

        /* ---------------- SERVICES ---------------- */
        {
          name: 'services',
          label: 'Services',
          fields: [
            ...sectionHeadFields(),
            {
              name: 'items',
              label: 'Dịch vụ',
              type: 'array',
              fields: [
                textField('title', 'Tên dịch vụ', true),
                markupField('description', 'Mô tả'),
                textField('deliverablesLabel', 'Nhãn deliverables'),
                tagsField('tags', 'Deliverables'),
              ],
            },
            markupField('note', 'Ghi chú cuối section'),
          ],
        },

        /* ---------------- WAYS ---------------- */
        {
          name: 'ways',
          label: 'Ways to Work',
          fields: [
            ...sectionHeadFields(false),
            {
              name: 'items',
              label: 'Hình thức hợp tác',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [
                    textField('badge', 'Badge'),
                    {
                      name: 'featured',
                      label: 'Nổi bật (nền lime)',
                      type: 'checkbox',
                      defaultValue: false,
                    },
                  ],
                },
                {
                  ...textField('title', 'Tiêu đề', true),
                  admin: {
                    description:
                      'Tiêu đề trùng với 1 lựa chọn "Bạn cần hỗ trợ" trong form sẽ được chọn sẵn khi bấm nút.',
                  },
                } as Field,
                markupField('description', 'Mô tả'),
                textField('ctaLabel', 'Nhãn nút'),
              ],
            },
          ],
        },

        /* ---------------- WORKS ---------------- */
        {
          name: 'works',
          label: 'Selected Works',
          description: 'Danh sách dự án được quản lý ở mục "Dự án (Selected Works)".',
          fields: [
            ...sectionHeadFields(),
            textField('footnote', 'Ghi chú cuối section'),
            textField('modalCtaLabel', 'Nút trong popup case study'),
          ],
        },

        /* ---------------- BRANDS ---------------- */
        {
          name: 'brands',
          label: 'Brands & Industries',
          fields: [
            ...sectionHeadFields(false),
            {
              name: 'items',
              label: 'Thương hiệu',
              type: 'array',
              fields: [textField('name', 'Tên thương hiệu', true)],
            },
            textField('industriesEyebrow', 'Eyebrow mục ngành'),
            {
              name: 'industries',
              label: 'Ngành',
              type: 'array',
              fields: [textField('title', 'Tên ngành', true), markupField('description', 'Mô tả')],
            },
          ],
        },

        /* ---------------- PROCESS ---------------- */
        {
          name: 'process',
          label: 'Process',
          fields: [
            ...sectionHeadFields(),
            {
              name: 'steps',
              label: 'Các bước',
              type: 'array',
              fields: [textField('title', 'Tên bước', true), markupField('description', 'Mô tả')],
            },
            {
              type: 'row',
              fields: [textField('ctaLabel', 'Nút — nhãn'), textField('ctaHref', 'Nút — liên kết')],
            },
          ],
        },

        /* ---------------- INSIGHTS ---------------- */
        {
          name: 'insights',
          label: 'Insights',
          fields: [
            ...sectionHeadFields(false),
            {
              name: 'items',
              label: 'Bài viết',
              type: 'array',
              fields: [
                textField('category', 'Chuyên mục'),
                textField('title', 'Tiêu đề', true),
                textField('linkLabel', 'Nhãn liên kết'),
                {
                  ...textField('url', 'URL bài viết'),
                  admin: { description: 'Để trống nếu chưa có bài (Coming soon).' },
                } as Field,
              ],
            },
          ],
        },

        /* ---------------- CONTACT ---------------- */
        {
          name: 'contact',
          label: 'Contact',
          fields: [
            textField('eyebrow', 'Eyebrow'),
            markupField('title', 'Tiêu đề lớn'),
            markupField('intro', 'Lời mời'),
            {
              name: 'items',
              label: 'Thông tin liên hệ',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [textField('label', 'Nhãn', true), textField('value', 'Giá trị', true)],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      ...textField('url', 'Liên kết'),
                      admin: { description: 'VD: mailto:..., tel:..., https://... Để trống = chữ thường.' },
                    } as Field,
                    {
                      name: 'newTab',
                      label: 'Mở tab mới',
                      type: 'checkbox',
                      defaultValue: false,
                    },
                  ],
                },
              ],
            },
            {
              type: 'collapsible',
              label: 'Form gửi brief',
              fields: [
                {
                  name: 'briefEmail',
                  label: 'Email nhận brief',
                  type: 'email',
                  admin: {
                    description: 'Brief từ form được gửi tới địa chỉ này (qua SMTP) và lưu ở mục "Brief khách gửi".',
                  },
                },
                optionsField('serviceOptions', 'Lựa chọn "Bạn cần hỗ trợ"'),
                optionsField('budgetOptions', 'Lựa chọn "Ngân sách dự kiến"'),
                optionsField('timelineOptions', 'Lựa chọn "Thời gian mong muốn bắt đầu"'),
                textField('messagePlaceholder', 'Placeholder ô Brief'),
                textField('submitLabel', 'Nhãn nút gửi'),
                textField('note', 'Ghi chú dưới nút'),
                textField('successMessage', 'Thông báo sau khi gửi'),
              ],
            },
          ],
        },
      ],
    },
  ],
}
