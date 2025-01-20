import mongoose from 'mongoose'
import { connectDB, disconnectDB } from '../config/database'

export class DatabaseManager {
  private static instance: DatabaseManager
  private isConnected: boolean = false

  private constructor() {}

  public static getInstance(): DatabaseManager {
    if (!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager()
    }
    return DatabaseManager.instance
  }

  public async connect(): Promise<void> {
    if (!this.isConnected) {
      await connectDB()
      this.isConnected = true
    }
  }

  public async disconnect(): Promise<void> {
    if (this.isConnected) {
      await disconnectDB()
      this.isConnected = false
    }
  }

  public isConnectedToDatabase(): boolean {
    return mongoose.connection.readyState === 1
  }

  public getConnection(): mongoose.Connection {
    return mongoose.connection
  }

  public async healthCheck(): Promise<boolean> {
    try {
      if (!this.isConnectedToDatabase()) {
        await this.connect()
      }
      return true
    } catch (error) {
      console.error('Database health check failed:', error)
      return false
    }
  }
}

// Export a singleton instance
export const dbManager = DatabaseManager.getInstance()

// Utility function for handling MongoDB ObjectId validation
export function isValidObjectId(id: string): boolean {
  return mongoose.Types.ObjectId.isValid(id)
}

// Error handler for database operations
export class DatabaseError extends Error {
  constructor(message: string, public originalError?: any) {
    super(message)
    this.name = 'DatabaseError'
  }
}

// Utility function to safely handle database operations
export async function withDatabase<T>(operation: () => Promise<T>): Promise<T> {
  try {
    if (!dbManager.isConnectedToDatabase()) {
      await dbManager.connect()
    }
    return await operation()
  } catch (error) {
    throw new DatabaseError(
      'Database operation failed',
      error
    )
  }
}
