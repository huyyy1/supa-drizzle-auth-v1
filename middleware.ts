import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    '/(dashboard)/:path*',
    '/api/:path*',
    '/(booking)/:path*',
  ],
}

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protect dashboard routes
  if (req.nextUrl.pathname.startsWith('/(dashboard)')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    // Check role-based access
    if (
      req.nextUrl.pathname.startsWith('/(dashboard)/admin') && 
      session.user.role !== 'admin'
    ) {
      return NextResponse.redirect(new URL('/(dashboard)', req.url))
    }
  }

  // Protect booking routes
  if (req.nextUrl.pathname.startsWith('/(booking)')) {
    // Optional: Add booking-specific protection
    // For example, checking if user has completed required steps
  }

  // API route protection
  if (req.nextUrl.pathname.startsWith('/api')) {
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
  }

  return res
}