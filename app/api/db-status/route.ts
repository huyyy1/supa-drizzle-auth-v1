import { NextResponse } from 'next/server'
import { checkDatabaseConnection } from '@/lib/db'

export async function GET() {
  try {
    const isConnected = await checkDatabaseConnection()
    
    return NextResponse.json({
      status: isConnected ? 'connected' : 'disconnected',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}