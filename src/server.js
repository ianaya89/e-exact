import config from './config/config';

import express from 'express';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import morgan from 'morgan';

import routes from './routes/index';

const port = config.PORT;
const app = express();

//require('./libraries/promisify-all')(['mongoose', 'jsonwebtoken', 'bcrypt']);

mongoose.connect(config.MONGODB_URL);

//app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(morgan('tiny'));

app.use('/', routes);

app.listen(port, () => console.log(`Listenning on port ${port}`) );

module.exports = app;