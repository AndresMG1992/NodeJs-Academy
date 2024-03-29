import winston from 'winston';
import config from 'config';

const dateFormat = () => new Date(Date.now()).toUTCString()

class LoggerService {
  constructor(service) {
    this.log_data = null
    const logger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'combined.log'
        })
      ],
      format: winston.format.printf( info => {
        const env = config.get('ENV');
        let message = `${dateFormat()} | ${info.level.toUpperCase()} | ${service} | ${info.message}`
        if (env === 'dev' || info.level === 'error') {
            message = info.obj ? message + ` | data:${JSON.stringify(info.obj)}` : message
            message = this.log_data ? message + ` | log_data:${JSON.stringify(this.log_data)}` : message
        }
        return message
      })
   });
   this.logger = logger
}
setLogData(log_data) {
  this.log_data = log_data
}
async info(message) {
  this.logger.log('info', message);
}
async info(message, obj) {
  this.logger.log('info', message, {
    obj
  })
}
async debug(message) {
  this.logger.log('debug', message);
}
async debug(message, obj) {
  this.logger.log('debug', message, {
    obj
  })
}
async error(message) {
  this.logger.log('error', message);
}
async error(message, obj) {
  this.logger.log('error', message, {
    obj
  })
}
}
export default LoggerService;