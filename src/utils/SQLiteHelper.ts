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
      this.db.run(`INSERT INTO user (id, email, username, password) VALUES (1, 'user@example.com', 'user', '$2b$10$BdtqSCdh8mkr0MJGmuxBdeIB7X3ADTFlxdseLv1TIXeUvOF7sm/wW');`);

      this.db.run(`DROP TABLE IF EXISTS bike;`);
      this.db.run(`
        CREATE TABLE IF NOT EXISTS bike (
          id INTEGER PRIMARY KEY,
          company TEXT,
          name TEXT,
          model TEXT,
          oil_change TEXT,
          oil_filter TEXT,
          cc INTEGER
        );
      `);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc) VALUES ('Kawasaki', 'Ninja ZX-10R', '8BL-ZXT02L', '2.9', '3.4', 998);`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc) VALUES ('Ducati', 'Panigale V4 R', '', '3.4', '3.4', 998);`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc) VALUES ('Honda', 'CBR 1000RR-R', '8BL-SC82', '2.8', '3.0', 999);`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc) VALUES ('YAMAHA', 'R1', '8BL-RN65J', '3.9', '4.1', 998);`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc) VALUES ('YAMAHA', 'R1M', '8BL-RN65J', '3.9', '4.1', 998);`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc) VALUES ('SUZUKI', 'GSX-R1000R', '2BL-DM11G', '3.1', '3.3', 998);`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc) VALUES ('BMW', 'S1000RR', '', '4.0', '4.0', 999);`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc) VALUES ('BMW', 'M1000RR', '', '4.0', '4.0', 999);`);

      this.db.run(`DROP TABLE IF EXISTS have_bike;`);
      this.db.run(`
        CREATE TABLE IF NOT EXISTS have_bike (
          id INTEGER PRIMARY KEY,
          user_id INTEGER,
          bike_id INTEGER,
          purchase_date TEXT,
          FOREIGN KEY (user_id) REFERENCES user(id)
          FOREIGN KEY (bike_id) REFERENCES bike(id)
        );
      `);
      this.db.run(`INSERT INTO have_bike (user_id, bike_id) VALUES (1, 1);`);
  
      // maintenance テーブルの作成または削除
      this.db.run(`DROP TABLE IF EXISTS maintenance;`);
      this.db.run(`
        CREATE TABLE IF NOT EXISTS maintenance (
          id INTEGER PRIMARY KEY,
          user_id INTEGER,
          bike_id INTEGER,
          title TEXT,
          description TEXT,
          odo INTEGER,
          price INTEGER,
          date TEXT,
          FOREIGN KEY (user_id) REFERENCES user(id)
          FOREIGN KEY (bike_id) REFERENCES bike(id)
        );
      `);
  
      // maintenance テーブルにデータを挿入
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴強にオイル交換', 1000, 0, '2023-07-24');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴強にオイル交換', 4000, 7000, '2023-08-14');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴速にオイル交換', 7000, 7000, '2023-09-14');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴速にオイル交換', 9000, 7000, '2023-10-24');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴速にオイル交換', 11000, 7000, '2023-11-1');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴速にオイル交換', 13000, 7000, '2023-12-3');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'タイヤ変更', 'RS11に前後タイヤ交換。', 15000, 70000, '2024-01-14');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴速にオイル交換', 15000, 7000, '2024-01-14');`);
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