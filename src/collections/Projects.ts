import type { CollectionConfig } from 'payload'
import { MARKUP_HINT, tagsField } from '../fields/shared'

const caseField = (name: string, label: string) => ({
  name,
  label,
  type: 'textarea' as const,
  admin: { description: MARKUP_HINT },
})

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Dự án', plural: 'Dự án (Selected Works)' },
  defaultSort: 'order',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'order', 'published'],
    description: 'Các dự án hiển thị ở mục "05 — Selected Works" và nội dung case study (popup).',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'title', label: 'Tên dự án', type: 'text', required: true },
        { name: 'category', label: 'Lĩnh vực', type: 'text' },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'order',
          label: 'Thứ tự',
          type: 'number',
          defaultValue: 0,
          admin: { description: 'Số nhỏ hiển thị trước' },
        },
        { name: 'published', label: 'Hiển thị', type: 'checkbox', defaultValue: true },
      ],
    },
    tagsField('cardTags', 'Tags trên thẻ dự án'),
    {
      type: 'collapsible',
      label: 'Case study (popup)',
      fields: [
        tagsField('caseTags', 'Tags trong popup'),
        caseField('challenge', 'Challenge'),
        caseField('objectives', 'Objectives'),
        caseField('role', 'My Role'),
        caseField('strategy', 'Strategy'),
        caseField('execution', 'Execution'),
        caseField('results', 'Results'),
      ],
    },
  ],
}
