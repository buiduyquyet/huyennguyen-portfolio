import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Ảnh / tệp', plural: 'Thư viện media' },
  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['filename', 'alt', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  upload: {
    // Chỉ dùng khi chạy ở máy local. Khi có BLOB_READ_WRITE_TOKEN, plugin
    // `vercelBlobStorage` trong `payload.config.ts` đẩy file lên Vercel Blob.
    staticDir: 'public/media',
  },
  fields: [
    {
      name: 'alt',
      label: 'Văn bản thay thế (Alt text)',
      type: 'text',
    },
  ],
}
