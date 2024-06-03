import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../app/config';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-prograss', 'blocked'],
      default: 'in-prograss',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save' ,async function(next){
    const user = this;
    user.password = await bcrypt.hash(user.password as string, Number(config.bcrypt_salt_round));
   next();
  })

userSchema.post('save', function (doc, next) {
  doc.password = '';

  next();
});

export const User = model<TUser>('user', userSchema);
