import { createPool, Pool } from 'mysql';
import { promisify } from 'util';
import { mysqlDatabase } from '../../config/database';
import { logger } from '../../services';

export class MySQL {
  public static symply: Pool;

  public static async connect() {
    try {
      const { host, password, port, database } = mysqlDatabase;
      if (!host || !password || !port || !database)
        return logger.error(
          'Review the database connect. some parameter is not provided',
        );

      this.symply = createPool(mysqlDatabase);

      this.symply.getConnection = promisify(this.symply.getConnection).bind(
        this.symply,
      );

      // @ts-ignore
      await this.symply.getConnection();

      this.symply.query = promisify(this.symply.query).bind(this.symply);
      logger.info('MySQL database connected');
    } catch (e) {
      logger.error(e);
    }
  }
}
