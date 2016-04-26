import fs from 'fs';
import winston from 'winston';

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

winston.emitErrs = true;

module.exports = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: 'logs/server.log',
      maxsize: 1048576,
      maxFiles: 10,
      colorize: false
    }),
    new winston.transports.Console({
      name: 'console',
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ]
});
