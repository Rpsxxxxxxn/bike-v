import sqlite3 from "sqlite3";
import EnvironmentUtil from "./EnvironmentUtil";

export default class SQLiteHelper {
  private db: sqlite3.Database;
  private FILE_NAME: string = './bike-v.db';

  private constructor() {
    this.db = new sqlite3.Database(EnvironmentUtil.isTest() ? ':memory:' : this.FILE_NAME);
  }

  public async createTable() {
    if (EnvironmentUtil.isProduction()) {
      return
    }
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
          cc INTEGER,
          body_link TEXT
        );
      `);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc, body_link) VALUES ('Kawasaki', 'Ninja ZX-10R', '8BL-ZXT02L', '2.9', '3.4', 998, 'https://www.kawasaki-motors.com/ja-jp/motorcycle/ninja/supersport/ninja-zx-10r');`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc, body_link) VALUES ('Ducati', 'Panigale V4 R', '', '3.4', '3.4', 998, 'https://www.ducati.com/jp/ja/bikes/panigale/panigale-v4-r');`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc, body_link) VALUES ('Honda', 'CBR 1000RR-R', '8BL-SC82', '2.8', '3.0', 999, 'https://www.honda.co.jp/CBR1000RRR/');`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc, body_link) VALUES ('YAMAHA', 'R1', '8BL-RN65J', '3.9', '4.1', 998, 'https://www.yamaha-motor.co.jp/mc/lineup/yzf-r1/');`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc, body_link) VALUES ('YAMAHA', 'R1M', '8BL-RN65J', '3.9', '4.1', 998, 'https://www.yamaha-motor.co.jp/mc/lineup/yzf-r1/');`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc, body_link) VALUES ('SUZUKI', 'GSX-R1000R', '2BL-DM11G', '3.1', '3.3', 998, 'https://www1.suzuki.co.jp/motor/lineup/gsxr1000ram2/');`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc, body_link) VALUES ('SUZUKI', 'GSX-1300R Hayabusa', '8BL-EJ11A', '3.2', '3.4', 1339, 'https://www1.suzuki.co.jp/motor/lineup/gsx1300rrqm4/');`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc, body_link) VALUES ('BMW', 'S1000RR', '', '4.0', '4.0', 999, 'https://www.bmw-motorrad.jp/ja/models/sport/s1000rr.html');`);
      this.db.run(`INSERT INTO bike (company, name, model, oil_change, oil_filter, cc, body_link) VALUES ('BMW', 'M1000RR', '', '4.0', '4.0', 999, 'https://www.bmw-motorrad.jp/ja/models/m/m1000rr.html');`);

      this.db.run(`DROP TABLE IF EXISTS have_bike;`);
      this.db.run(`
        CREATE TABLE IF NOT EXISTS have_bike (
          id INTEGER PRIMARY KEY,
          user_id INTEGER,
          bike_id INTEGER,
          purchase_date DATETIME,
          FOREIGN KEY (user_id) REFERENCES user(id)
          FOREIGN KEY (bike_id) REFERENCES bike(id)
        );
      `);
      this.db.run(`INSERT INTO have_bike (user_id, bike_id, purchase_date) VALUES (1, 1, '2023-07-16');`);
  
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
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴強にオイル交換', 1200, 12000, '2023-07-20');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴強にオイル交換', 1400, 0, '2023-07-24');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴強にオイル交換', 4000, 7000, '2023-08-14');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴速にオイル交換', 7000, 7000, '2023-09-14');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴速にオイル交換', 9000, 7000, '2023-10-24');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴速にオイル交換', 11000, 7000, '2023-11-1');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴速にオイル交換', 13000, 7000, '2023-12-3');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'タイヤ変更', 'RS11に前後タイヤ交換。', 15000, 70000, '2024-01-14');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴速にオイル交換', 15000, 7000, '2024-01-14');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイル交換', '冴速にオイル交換', 17500, 7000, '2024-02-23');`);
      this.db.run(`INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date) VALUES (1, 1, 'オイルフィルター交換', 'Kawasaki純正オイルに交換', 17500, 7000, '2024-02-23');`);
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