import { genSaltAsync, hashAsync } from 'bcrypt';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

UserSchema.pre('save', function(next) {
  if (this && !this.isModified('password')) { return next(); }

  return genSaltAsync(SALT_WORK_FACTOR)
    .then(salt => hashAsync(this.password, salt))
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => next(err));
});

module.exports = mongoose.model('User', UserSchema);