export class UserStatement {
  public static insertUser() {
    return `INSERT INTO users(email, password, name) VALUES (?)`;
  }

  public static findUser() {
    return `SELECT *  FROM users WHERE (email = ?) LIMIT 1`;
  }
}
