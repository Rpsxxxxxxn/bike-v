import express from 'express';
import SQLiteHelper from './utils/SQLiteHelper';
import session from 'express-session';
import router from './middlewares/Routes';
import cors from 'cors';

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

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

app.use(router);
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  const db = SQLiteHelper.create();
  db.createTable();
});
