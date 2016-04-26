import { genSaltAsync, hashAsync, compareAsync } from 'bcrypt';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const SALT_ROUNDS = 10;

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

UserSchema.methods.comparePassword = function (password) {
  return compareAsync(password, this.password);
}

UserSchema.pre('save', function(next) {
  if (this && !this.isModified('password')) { return next(); }

  return genSaltAsync(SALT_ROUNDS)
    .then(salt => hashAsync(this.password, salt))
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => next(err));
});

export default mongoose.model('User', UserSchema);