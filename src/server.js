import config from './config/config';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

import { promisifyAll } from 'bluebird';

import middleware from './middlewares/middleware'
import userRoute from './routes/user.route';

const port = config.PORT;
const app = express();

promisifyAll(mongoose);
promisifyAll(bcrypt);
promisifyAll(jsonwebtoken);

mongoose.connect(config.MONGODB_URL);

middleware(app);
app.use('/', userRoute);

app.listen(port, () => console.log(`Listenning on port ${port}`) );

module.exports = app;