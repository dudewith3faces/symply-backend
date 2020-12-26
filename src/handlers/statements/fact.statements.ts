export class FactStatement {
  public static insertFact() {
    return `INSERT INTO facts(id, text) VALUES (?)`;
  }

  public static findUser() {
    return `SELECT *  FROM facts WHERE (id = ?) LIMIT 1`;
  }

  public static getFacts() {
    return `SELECT * FROM facts`;
  }

  public static deleteFact() {
    return `DELETE FROM facts where (id = ?)`;
  }
}
