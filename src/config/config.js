import dotenv from 'dotenv'
dotenv.config();

export default {
  PORT: process.env.PORT || 9090,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/e-xact',
  ENV: process.env.NODE_ENV || 'development',
  AUTH: {
    KEY: process.env.JWT_KEY || 'exactapp!',
    EXPIRATION: process.env.JWT_EXPIRATION || 86400,
  }
};