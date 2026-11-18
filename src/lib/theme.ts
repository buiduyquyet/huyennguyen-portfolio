/**
 * Các màu của website chỉnh được trong CMS (Cài đặt chung → Màu sắc).
 * `cssVar` là biến CSS trong globals.css, `default` là màu gốc của thiết kế.
 */
export const THEME_COLORS = [
  { name: 'primary', cssVar: '--lime', default: '#c8ff00', label: 'Màu chính (primary)', description: 'Nút, chữ nổi bật, dải chữ chạy, nền section Contact' },
  { name: 'primaryDark', cssVar: '--lime-dark', default: '#a6d400', label: 'Màu chính — đậm', description: 'Gạch chân khi rê chuột ở section Why' },
  { name: 'background', cssVar: '--black', default: '#0a0a0a', label: 'Nền chính', description: 'Nền trang và chữ trên nền màu chính' },
  { name: 'surface', cssVar: '--ink', default: '#141414', label: 'Nền phụ', description: 'Section Ways to Work, thẻ ngành, popup, menu mobile' },
  { name: 'surfaceAlt', cssVar: '--gray', default: '#1e1e1e', label: 'Nền khung ảnh', description: 'Nền khung ảnh chân dung khi chưa có ảnh' },
  { name: 'border', cssVar: '--line', default: '#2a2a2a', label: 'Đường viền', description: 'Viền, đường kẻ, lưới nền Hero' },
  { name: 'text', cssVar: '--white', default: '#f5f5f0', label: 'Chữ chính', description: 'Chữ chính, nền section Why' },
  { name: 'softText', cssVar: '--soft', default: '#cfcfc8', label: 'Chữ phụ sáng', description: 'Đoạn văn, menu' },
  { name: 'mutedText', cssVar: '--muted', default: '#9a9a94', label: 'Chữ mờ', description: 'Mô tả, ghi chú' },
] as const

export type ThemeColorName = (typeof THEME_COLORS)[number]['name']

export const HEX_COLOR = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/

/** CSS ghi đè biến màu; chỉ nhận mã hex hợp lệ để không chèn được CSS lạ. */
export function themeCss(theme?: Partial<Record<ThemeColorName, string | null>> | null) {
  const vars = THEME_COLORS.flatMap(({ name, cssVar }) => {
    const v = theme?.[name]?.trim()
    return v && HEX_COLOR.test(v) ? [`${cssVar}:${v}`] : []
  })
  return vars.length ? `html:root{${vars.join(';')}}` : ''
}
