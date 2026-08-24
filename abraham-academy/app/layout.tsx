import './globals.css'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer className="bg-gray-900 text-white text-center p-8">
          <p>© 2024 Abraham Online Academy. Learn Today, Lead Tomorrow.</p>
        </footer>
      </body>
    </html>
  )
}