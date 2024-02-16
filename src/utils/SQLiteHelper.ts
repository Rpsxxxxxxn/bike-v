import sqlite3 from "sqlite3";
import fs from "fs";

export default class SQLiteHelper {
  private db: sqlite3.Database;
  // private INIT_SQL: string = fs.readFileSync('init_db.sql', 'utf8');
  private FILE_NAME: string = './bike-v.db';

  private constructor() {
    this.db = new sqlite3.Database(this.FILE_NAME);
  }

  public async createTable() {
    // await this.execute(this.INIT_SQL, []);
    this.db.serialize(() => {
      // ユーザーテーブルの作成
      this.db.run(`DROP TABLE IF EXISTS user;`);
      this.db.run(`
        CREATE TABLE IF NOT EXISTS user (
          id INTEGER PRIMARY KEY,
          email TEXT UNIQUE,
          username TEXT,
          password TEXT
        );
      `);
      this.db.run(`INSERT INTO user (email, username, password) VALUES ('admin@example.com', 'Admin', '');`);

      this.db.run(`DROP TABLE IF EXISTS bike;`);
      this.db.run(`
        CREATE TABLE IF NOT EXISTS bike (
          id INTEGER PRIMARY KEY,
          name TEXT,
          type TEXT,
          cc INTEGER,
          purchase_date TEXT,
        );
      `);
  
      // bike テーブルにデータを挿入
      this.db.run(`INSERT INTO bike (name) VALUES ('Kawasaki Ninja ZX-10R');`);
  
      // maintenance テーブルの作成または削除
      this.db.run(`DROP TABLE IF EXISTS maintenance;`);
      this.db.run(`
        CREATE TABLE IF NOT EXISTS maintenance (
          id INTEGER PRIMARY KEY,
          bike_id INTEGER,
          title TEXT,
          description TEXT,
          odo INTEGER,
          price INTEGER,
          date TEXT,
          FOREIGN KEY (bike_id) REFERENCES bike(id)
        );
      `);
  
      // maintenance テーブルにデータを挿入
      this.db.run(`INSERT INTO maintenance (bike_id, title, description, odo, price, date) VALUES (1, 'タイヤ変更', 'RS11', 15000, 70000, '2024-01-14');`);
    });
  }

  public async close() {
    this.db.close();
    console.log('close')
  }

  /**
   * テーブルのデータを取得する
   * @param sql 
   * @param params 
   * @returns 
   */
  public async all(sql: string, params: any[]) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
          console.log(sql, params, rows)
        }
      });
    });
  }

  /**
   * テーブルのデータを更新する
   * @param sql 
   * @param params 
   * @returns 
   */
  public async execute(sql: string, params: any[]) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve('success');
          console.log(sql, params, 'execute')
        }
      });
    });
  }

  /**
   * テーブルのデータを取得する
   * @param sql 
   * @param params 
   * @returns 
   */
  public async get(sql: string, params: any[]) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
          console.log(sql, params, row)
        }
      });
    });
  }

  public static create() {
    return new SQLiteHelper();
  }
}