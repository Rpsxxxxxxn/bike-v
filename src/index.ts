import express from 'express';
import HistoryController from './controllers/HistoryController';
import path from 'path';

const app = express();
const port = 3000;

const historyController = HistoryController.create();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello from Express and EJS with TypeScript!' });
});

app.get('/history', (req, res) => historyController.get(req, res));
app.post('/history', (req, res) => historyController.update(req, res));
app.delete('/history', (req, res) => historyController.delete(req, res));

