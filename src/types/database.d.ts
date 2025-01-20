import { Connection } from 'mongoose'

export interface IDatabaseManager {
  connect(): Promise<void>
  disconnect(): Promise<void>
  isConnectedToDatabase(): boolean
  getConnection(): Connection
  healthCheck(): Promise<boolean>
}

export interface IDatabaseConfig {
  uri: string
  options: {
    autoIndex: boolean
    maxPoolSize: number
    serverSelectionTimeoutMS: number
    socketTimeoutMS: number
    family: number
    retryWrites: boolean
  }
}

export class DatabaseError extends Error {
  constructor(message: string, public originalError?: any)
  name: string
}
