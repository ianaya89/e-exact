import config from './config/config';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

import { promisifyAll } from 'bluebird';

import middlewares from './middlewares/middleware'
import err from './middlewares/err.middleware'
import routes from './routes/route';

const port = config.PORT;
const app = express();

promisifyAll(mongoose);
promisifyAll(bcrypt);
promisifyAll(jsonwebtoken);

mongoose.connect(config.MONGODB_URL);

middlewares(app);
routes(app);
err(app);

app.listen(port, () => console.log(`Listenning on port ${port}`) );

export default app;