import mongoose, { Document, Schema } from 'mongoose'

// Interface pour le typage fort avec TypeScript
export interface IUser extends Document {
  email: string
  firstName: string
  lastName: string
  password: string
  role: 'user' | 'admin'
  createdAt: Date
  updatedAt: Date
}

// Schéma Mongoose
const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email'
    ]
  },
  firstName: {
    type: String,
    required: [true, 'Please provide a first name'],
    trim: true,
    minlength: [2, 'First name must be at least 2 characters long'],
    maxlength: [50, 'First name cannot be more than 50 characters long']
  },
  lastName: {
    type: String,
    required: [true, 'Please provide a last name'],
    trim: true,
    minlength: [2, 'Last name must be at least 2 characters long'],
    maxlength: [50, 'Last name cannot be more than 50 characters long']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [8, 'Password must be at least 8 characters long'],
    select: false // Ne pas inclure par défaut dans les requêtes
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true, // Ajoute automatiquement createdAt et updatedAt
  toJSON: { 
    virtuals: true,
    transform: function(doc, ret) {
      delete ret.password // Ne jamais envoyer le mot de passe
      delete ret.__v // Cacher la version
      return ret
    }
  }
})

// Index pour optimiser les recherches
UserSchema.index({ email: 1 })

// Virtual pour le nom complet
UserSchema.virtual('fullName').get(function(this: IUser) {
  return `${this.firstName} ${this.lastName}`
})

// Pre-save middleware pour le hachage du mot de passe
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next()
  }
  try {
    // Ici vous pouvez ajouter la logique de hachage du mot de passe
    // par exemple avec bcrypt
    next()
  } catch (error) {
    next(error as Error)
  }
})

// Méthode pour comparer les mots de passe
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  try {
    // Ici vous pouvez ajouter la logique de comparaison des mots de passe
    // par exemple avec bcrypt
    return true
  } catch (error) {
    return false
  }
}

// Export du modèle
export const User = mongoose.model<IUser>('User', UserSchema)
