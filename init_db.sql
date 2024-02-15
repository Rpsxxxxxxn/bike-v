
DROP TABLE IF EXISTS bike;
CREATE TABLE IF NOT EXISTS bike (
  id INTEGER PRIMARY KEY,
  name TEXT UNIQUE
);
INSERT INTO bike (name) VALUES ('ZX-10R');

DROP TABLE IF EXISTS maintenance;
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
INSERT INTO maintenance (bike_id, title, description, odo, price, date) VALUES (1, 'タイヤ変更', 'RS11', 15000, 70000, '2024-01-14');
