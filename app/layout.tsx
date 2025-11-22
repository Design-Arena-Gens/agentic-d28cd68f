import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'خدماتي - منصة الخدمات الجزائرية',
  description: 'منصة جزائرية لتقديم وطلب الخدمات المختلفة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
