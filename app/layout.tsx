import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Release Smile | Dioscuri Relief Engine',
  description: 'Enterprise-grade relief disbursement platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  )
}
