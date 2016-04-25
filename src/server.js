import config from './config/config';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

import { promisifyAll } from 'bluebird';

import userRoute from './routes/user.route';

const port = config.PORT;
const app = express();

promisifyAll(mongoose);
promisifyAll(bcrypt);
promisifyAll(jsonwebtoken);

mongoose.connect(config.MONGODB_URL);

//app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(morgan('tiny'));

app.use('/', userRoute);

app.listen(port, () => console.log(`Listenning on port ${port}`) );

module.exports = app;