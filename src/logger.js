import pino from 'pino';

const pinoLogger = pino({
  transport: {
    target: 'pino-pretty'
  },
});

class Logger {
  /**
   * @param {string} prefix Prefix. E.g, 'server', 'client'
   * @param {string} contents Message that needs to be displayed
   */
  info(prefix, contents) {
    pinoLogger.info(`[${prefix.toUpperCase()}] ${contents}`)
  }

  /**
   * @param {string} prefix Prefix. E.g, 'server', 'client'
   * @param {string} contents Message that needs to be displayed
   */
  warn(prefix, contents) {
    pinoLogger.warn(`[${prefix.toUpperCase()}] ${contents}`)
  }

  /**
   * @param {string} prefix Prefix. E.g, 'server', 'client'
   * @param {string} contents Message that needs to be displayed
   */
  error(prefix, contents) {
    pinoLogger.error(`[${prefix.toUpperCase()}] ${contents}`)
  }

  /**
   * @param {string} prefix Prefix. E.g, 'server', 'client'
   * @param {string} contents Message that needs to be displayed
   */
  fatal(prefix, contents) {
    pinoLogger.fatal(`[${prefix.toUpperCase()}] ${contents}`)
  }
}

const logger = new Logger();

export default logger;
