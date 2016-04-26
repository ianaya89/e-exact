import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

import config from '../config/config';
import logger from '../libs/logger.js';

export default app => {
  app.set('json spaces', 2);

  app.use(morgan('common', {
    stream: {
      write: (message) => {
        logger.info(message);
      }
    }
  }));

  app.use(helmet());
  
  app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

  app.use(compression());
  app.use(bodyParser.json());
};
