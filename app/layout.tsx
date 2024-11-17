import { ThemeProvider } from '@/components/providers/theme-provider'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata = {
  title: {
    default: 'SimplyMaid - Professional House Cleaning Services',
    template: '%s | SimplyMaid'
  },
  description: 'Expert cleaners delivering spotless homes across Australia\'s major cities',
  keywords: ['house cleaning', 'cleaning services', 'home cleaners', 'australia'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}