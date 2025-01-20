import { Request, Response, NextFunction } from 'express'
import { dbManager } from '../utils/db'

export async function databaseMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (!dbManager.isConnectedToDatabase()) {
      await dbManager.connect()
    }
    next()
  } catch (error) {
    console.error('Database middleware error:', error)
    res.status(500).json({ error: 'Database connection failed' })
  }
}

export async function validateObjectId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id
  if (!id || !dbManager.isValidObjectId(id)) {
    return res.status(400).json({ error: 'Invalid ID format' })
  }
  next()
}
