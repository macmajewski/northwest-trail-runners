import '@picocss/pico'
import './globals.css'

export const metadata = {
  title: 'Northwest Trail Runners',
  description: 'Trail running community based in Portland, OR. Come join us!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  )
}