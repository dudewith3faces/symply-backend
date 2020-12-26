import API from './api';
import { hostname, PORT } from './config';
import { MySQL } from './handlers';
import { allMiddleware, app } from './middleware';
import { logger } from './services';

export default class App {
  private readonly api = new API().route();
  constructor() {
    try {
      this.build();
    } catch (e) {
      logger.error(e);
    }
  }

  private build(): void {
    this.database();
    this.middleware();
    this.route();
    this.listen();
  }

  private middleware(): void {
    app.use(allMiddleware);
  }

  private route(): void {
    app.use(this.api);
  }

  private database(): void {
    MySQL.connect();
  }

  private listen(): void {
    app.listen(PORT, hostname);
    logger.info(`server started on ${hostname}:${PORT}`);
  }
}
