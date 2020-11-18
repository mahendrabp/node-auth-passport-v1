import { NextFunction } from 'express';
import { Document, Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  name: string;
  email: string;
  username: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>; //this is a method
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
});

// before the save happen, we hash the password first
UserSchema.pre<IUser>('save', async function (next: NextFunction) {
  const user = this;
  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
});

UserSchema.methods.comparePassword = async function (
  password: string
): Promise<Boolean> {
  return await bcrypt.compare(password, this.password);
};

export default model<IUser>('User', UserSchema);
