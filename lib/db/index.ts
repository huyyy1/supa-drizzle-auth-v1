import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required')
}

// For queries: Use connection pooling in production
const queryClient = postgres(process.env.DATABASE_URL, {
  max: 1,
  ssl: 'require',
  connection: {
    options: `-c search_path=public`
  },
  // Add debug logging
  debug: process.env.NODE_ENV === 'development',
  onnotice: () => {}, // Silence notices
})

export const db = drizzle(queryClient, { schema })

// Helper function to check database connection
export async function checkDatabaseConnection() {
  try {
    const result = await queryClient`SELECT NOW()`
    console.log('Database connection successful:', result)
    return true
  } catch (error) {
    console.error('Database connection failed:', error)
    return false
  }
}