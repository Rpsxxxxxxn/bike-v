import express from 'express';
import SQLiteHelper from './utils/SQLiteHelper';
import session from 'express-session';
import router from './middlewares/Routes';

const app = express();
const port = 8888;

// JSONをパースするためのミドルウェア
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
}));

app.use(router);
app.set('view engine', 'ejs');

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
  // const db = SQLiteHelper.create();
  // db.createTable();
});
