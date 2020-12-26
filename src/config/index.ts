import { config } from 'dotenv';

config();

export { log } from './log';
export { PORT, hostname } from './server';
export * from './encrpty';
