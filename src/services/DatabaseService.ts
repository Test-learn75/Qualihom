import { connectDB } from '../config/database'

class DatabaseService {
  private static instance: DatabaseService
  private isConnected: boolean = false

  private constructor() {}

  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService()
    }
    return DatabaseService.instance
  }

  public async connect(): Promise<void> {
    if (!this.isConnected) {
      try {
        await connectDB()
        this.isConnected = true
        console.log('Database connection established')
      } catch (error) {
        console.error('Failed to connect to database:', error)
        throw error
      }
    }
  }

  public async disconnect(): Promise<void> {
    if (this.isConnected) {
      try {
        await connectDB()
        this.isConnected = false
        console.log('Database connection closed')
      } catch (error) {
        console.error('Failed to disconnect from database:', error)
        throw error
      }
    }
  }

  public isConnectedToDatabase(): boolean {
    return this.isConnected
  }
}

export default DatabaseService
