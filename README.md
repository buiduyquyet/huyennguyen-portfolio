# Huyen Nguyen Portfolio — Next.js + Payload CMS

Trang portfolio dựng lại 1:1 từ `nguyenhuyen-portfolio.html`, toàn bộ nội dung chỉnh sửa được qua Payload CMS.

## Chạy local

```bash
cp .env.example .env      # điền DATABASE_URL (MongoDB) và PAYLOAD_SECRET
pnpm install
pnpm dev
```

- Website: http://localhost:3000
- CMS: http://localhost:3000/admin (lần đầu sẽ yêu cầu tạo tài khoản admin)

Lần chạy đầu tiên, nội dung từ file HTML gốc được tự động seed vào MongoDB.

## Database

Dùng MongoDB Atlas, cùng cluster với dự án quyet-portfolio nhưng là **database riêng** `huyennguyen-portfolio` (tránh trùng collection `users` với `blogdb`). Giống quyet-portfolio, `payload.config.ts` đặt DNS 1.1.1.1/8.8.8.8 để resolve bản ghi SRV của Atlas.

## Chỉnh sửa nội dung trong CMS

| Mục trong admin | Nội dung |
| --- | --- |
| **Globals → Trang chủ** | Từng section theo tab: Hero, Số liệu, About, Why, Services, Ways to Work, Selected Works, Brands & Industries, Process, Insights, Contact (gồm email nhận brief và các lựa chọn trong form) |
| **Globals → Cài đặt chung** | Màu sắc (primary, nền, chữ...), SEO, logo, menu, footer |
| **Collections → Dự án** | Thẻ dự án + nội dung popup case study (sắp xếp theo trường "Thứ tự") |
| **Collections → Media** | Ảnh upload (VD: ảnh chân dung ở tab About) |

Cú pháp định dạng trong các ô văn bản:

- Xuống dòng → ngắt dòng
- `**chữ**` → in đậm
- `[[chữ]]` → màu lime
- `{{chữ}}` → nghiêng, mờ (dùng cho ghi chú "[Cập nhật: ...]")

## Cấu trúc

```
src/
  app/(frontend)/       # Trang chủ (page.tsx) + CSS gốc (globals.css)
  app/(payload)/        # Admin panel & API của Payload (tự sinh)
  components/           # Nav, Works (modal), ContactForm, Effects (reveal/counter)
  collections/          # Projects, Media, Users
  globals/              # Home, Settings
  seed.ts               # Nội dung mặc định
```

## Thay đổi schema

Sau khi sửa field trong `collections/` hoặc `globals/`:

```bash
pnpm generate:types
```

## Production

```bash
pnpm build && pnpm start
```

MongoDB không cần migration.

## Gửi mail từ form liên hệ (giống quyet-portfolio)

Brief khách gửi được lưu ở **Collections → Brief khách gửi**, rồi gửi mail tới "Email nhận brief" (tab Contact) qua SMTP. Nút Reply trong mail trả lời thẳng cho khách.

Điền vào `.env` (và Environment Variables trên Vercel):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tai-khoan@gmail.com
SMTP_PASS=<App Password 16 ký tự>
EMAIL_FROM=tai-khoan@gmail.com
```

Gmail: bật xác minh 2 bước, rồi tạo App Password tại https://myaccount.google.com/apppasswords. Chưa điền SMTP thì brief vẫn được lưu, mail chỉ in ra console.

## Ảnh upload (giống namdinhfc)

- Có `BLOB_READ_WRITE_TOKEN` trong `.env` → ảnh được đẩy lên **Vercel Blob**, nằm trong thư mục `huyennguyen-portfolio/` của store.
- Bỏ trống → plugin tự tắt, ảnh lưu vào `public/media` (tiện khi dev ở máy).

Khi deploy lên Vercel **bắt buộc** phải có token, vì filesystem của Vercel chỉ đọc.
