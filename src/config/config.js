import dotenv from 'dotenv'
dotenv.config();

export default {
  PORT: process.env.PORT || 9090,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/e-xact',
  ENV: process.env.NODE_ENV || 'development'
};