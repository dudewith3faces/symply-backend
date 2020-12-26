import { assert, request, use } from 'chai';
import chaiHTTP = require('chai-http');
import { PORT } from '../../src/config';

export class FactAPITest {
  constructor() {
    this.build();
  }

  private build() {
    use(chaiHTTP);
    this.test();
  }

  private req() {
    return request(`http://localhost:${PORT}/api/fact/`);
  }

  private test() {
    it('POST /api/fact', async () => {
      try {
        this.req()
          .post('')
          .send({ id: '12345667', text: 'lorem ipsum' })
          .end((err, { status, body }) => {
            assert.equal(status, 200, 'reponse should be 200');
            assert.isObject(body);
            assert.equal(body.isError, undefined);
          });
      } catch (e) {
        assert.isNotNull(e);
      }
    });

    it('GET /api/fact', async () => {
      try {
        this.req()
          .get('')
          .end((err, { status, body }) => {
            assert.equal(status, 200, 'reponse should be 200');
            assert.isObject(body);
            assert.equal(body.isError, undefined);
            assert.lengthOf(body.payload, 1);
          });
      } catch (e) {
        assert.isNotNull(e);
      }
    });

    it('DELETE /api/fact', async () => {
      try {
        this.req()
          .delete('1234567')
          .end((err, { status, body }) => {
            assert.equal(status, 200, 'reponse should be 200');
            assert.isObject(body);
            assert.equal(body.isError, undefined);
          });
      } catch (e) {
        assert.isNotNull(e);
      }
    });
  }
}

describe('AUTH API', () => new FactAPITest());
