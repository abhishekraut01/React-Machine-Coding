import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Chat API Tester',
  description: 'Test AI Chat API with custom prompts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
