import React from 'react'
import type { Metadata } from 'next'
import { getSiteData } from '@/lib/data'
import { themeCss } from '@/lib/theme'
import './globals.css'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const { settings } = await getSiteData()
  return {
    title: settings.siteTitle || 'Huyen Nguyen',
    description: settings.siteDescription || undefined,
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { settings } = await getSiteData()
  const css = themeCss(settings.theme)

  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
        {/* Màu chỉnh trong CMS (Cài đặt chung → Màu sắc) */}
        {css && <style id="theme-colors" dangerouslySetInnerHTML={{ __html: css }} />}
      </head>
      <body>{children}</body>
    </html>
  )
}
