import express, { Request, Response } from 'express';
import HistoryController from './controllers/HistoryController';
import MaintenanceController from './controllers/MaintenanceController';
import SQLiteHelper from './utils/SQLiteHelper';

const app = express();
const port = 8888;

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

app.get('/', (req: Request, res: Response) => {
  res.redirect('/maintenance');
  // res.render('index', { title: 'Hello from Express and EJS with TypeScript!' });
});

app.get('/history', async (req: Request, res: Response) => historyController.get(req, res));
app.post('/history', async (req: Request, res: Response) => historyController.update(req, res));
app.delete('/history', async (req: Request, res: Response) => historyController.delete(req, res));

app.get('/maintenance', (req: Request, res: Response) => maintenanceController.index(req, res));
app.post('/maintenance/register', (req: Request, res: Response) => maintenanceController.register(req, res));