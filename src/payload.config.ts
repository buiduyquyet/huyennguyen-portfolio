import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { Settings } from './globals/Settings'
import { Home } from './globals/Home'
import { seed } from './seed'
import { setServers } from 'node:dns'

// Giống quyet-portfolio: dùng DNS công cộng để resolve bản ghi SRV của MongoDB Atlas
setServers(['1.1.1.1', '8.8.8.8'])

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' — Huyen Nguyen CMS',
    },
  },
  collections: [Projects, Media, Users],
  globals: [Home, Settings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [
    /**
     * Giống namdinhfc: filesystem của Vercel chỉ đọc nên ảnh upload phải nằm ở Vercel Blob.
     * Không có `BLOB_READ_WRITE_TOKEN` (máy local) thì plugin tự tắt và Payload
     * lưu vào `public/media`.
     *
     * `prefix` tách file của dự án này thành thư mục riêng trong Blob store,
     * phòng khi dùng chung store với dự án khác.
     */
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: { media: { prefix: 'huyennguyen-portfolio' } },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  onInit: async (payload) => {
    await seed(payload)
  },
})
