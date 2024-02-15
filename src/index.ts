import express from 'express';
import HistoryController from './controllers/HistoryController';
import path from 'path';
import MaintenanceController from './controllers/MaintenanceController';
import SQLiteHelper from './utils/SQLiteHelper';

const app = express();
const port = 3000;

const historyController = HistoryController.create();
const maintenanceController = MaintenanceController.create();

// JSONをパースするためのミドルウェア
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
  const db = SQLiteHelper.create();
  db.createTable();
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello from Express and EJS with TypeScript!' });
});

app.get('/history', async (req, res) => historyController.get(req, res));
app.post('/history', async (req, res) => historyController.update(req, res));
app.delete('/history', async (req, res) => historyController.delete(req, res));

app.get('/maintenance', (req, res) => maintenanceController.index(req, res));
app.post('/maintenance/register', (req, res) => maintenanceController.register(req, res));