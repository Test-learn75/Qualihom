import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/my-app'

const options: mongoose.ConnectOptions = {
  autoIndex: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
  retryWrites: true,
}

export async function connectDB(): Promise<typeof mongoose> {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log('Already connected to MongoDB')
      return mongoose
    }

    const connection = await mongoose.connect(MONGODB_URI, options)
    console.log(`MongoDB Connected: ${connection.connection.host}`)
    
    mongoose.connection.on('error', (error) => {
      console.error('MongoDB connection error:', error)
    })

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected')
    })

    process.on('SIGINT', async () => {
      try {
        await mongoose.connection.close()
        console.log('MongoDB connection closed through app termination')
        process.exit(0)
      } catch (err) {
        console.error('Error closing MongoDB connection:', err)
        process.exit(1)
      }
    })

    return connection
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    process.exit(1)
  }
}

export async function disconnectDB(): Promise<void> {
  try {
    await mongoose.connection.close()
    console.log('MongoDB connection closed')
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error)
    throw error
  }
}

export function getConnection(): mongoose.Connection {
  return mongoose.connection
}
