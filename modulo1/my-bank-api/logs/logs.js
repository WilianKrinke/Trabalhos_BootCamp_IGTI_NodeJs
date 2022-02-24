import winston from "winston";

const {printf, combine, label, timestamp} = winston.format

const myFormatsLog = printf(({level, message, label, timestamp}) => {
    return `\n${timestamp} | ${label} | ${level}: ${message}`
})

const loggerWinston = winston.createLogger({
    level: 'info',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: 'logs.log'})        
    ],
    format: combine(
        label({label: 'my-bank-api'}),
        timestamp(),
        myFormatsLog
    )
})

export default loggerWinston;