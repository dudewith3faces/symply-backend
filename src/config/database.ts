import { config } from 'dotenv';
import { PoolConfig } from 'mysql';

config();

const {
  databaseConnectionLimit,
  databaseHost,
  databaseUser,
  databasePassword,
  databaseName,
  databasePort,
} = process.env;

const mysqlDatabase: Readonly<PoolConfig> = {
  connectionLimit: databaseConnectionLimit
    ? Number(databaseConnectionLimit)
    : undefined,
  database: databaseName,
  host: databaseHost,
  password: databasePassword,
  port: databasePort ? Number(databasePort) : undefined,
  user: databaseUser,
};

export { mysqlDatabase };
