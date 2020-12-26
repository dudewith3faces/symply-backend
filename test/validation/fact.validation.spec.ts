import { assert } from 'chai';
import { FactStatement } from '../../src/handlers/statements';

class FactStatementTest {
  constructor() {
    this.build();
  }

  private build() {
    this.insert();
    this.get();
    this.find();
    this.delete();
  }

  private insert() {
    it('insert fact', () => {
      const test = FactStatement.insertFact();
      const expect = 'INSERT INTO facts(id, text) VALUES (?)';

      assert.isString(test, 'sql statement is not string');
      assert.deepStrictEqual(test, expect, 'sql statement is changed');
    });
  }

  private get() {
    it('get', () => {
      const test = FactStatement.getFacts();
      const expect = 'SELECT * FROM facts';

      assert.isString(test, 'get fact sql statement is not string');
      assert.deepStrictEqual(test, expect, 'get fact statement is changed');
    });
  }

  private find() {
    it('find fact', () => {
      const test = FactStatement.findUser();
      const expect = 'SELECT *  FROM facts WHERE (id = ?) LIMIT 1';

      assert.isString(test, "find fact didn't return string");
      assert.deepStrictEqual(test, expect, 'find fact statement is changed');
    });
  }

  private delete() {
    it('delete fact', () => {
      const test = FactStatement.deleteFact();
      const expect = 'DELETE FROM facts where (id = ?)';

      assert.isString(test, "delete fact didn't return string");
      assert.deepStrictEqual(test, expect, 'delete fact statement is changed');
    });
  }
}

describe('FACT SQL STATEMENTS', () => new FactStatementTest());
