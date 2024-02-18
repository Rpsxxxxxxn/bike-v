import { Request, Response, Router } from 'express';
import Authenticate from './Authenticate';
import HistoryController from '../controllers/HistoryController';
import MaintenanceController from '../controllers/MaintenanceController';
import UserController from '../controllers/UserController';
import BikeController from '../controllers/BikeController';
import HistoryGraphController from '../controllers/HistoryGraphController';
import View3DController from '../controllers/View3DController';

const historyController = HistoryController.create();
const maintenanceController = MaintenanceController.create();
const userController = UserController.create();
const bikeController = BikeController.create();
const historyGraphController = HistoryGraphController.create();
const view3DController = View3DController.create();

const router = Router();
router.use(Authenticate.authenticateUser);

router.get('/', (req: Request, res: Response) => {
  res.redirect('/maintenance');
});

router.get('/user/login', async (req: Request, res: Response) => userController.getLogin(req, res));
router.post('/user/login', async (req: Request, res: Response) => userController.postLogin(req, res));
router.get('/user/register', async (req: Request, res: Response) => userController.getRegister(req, res));
router.post('/user/register', async (req: Request, res: Response) => userController.postRegister(req, res));
router.post('/user/logout', async (req: Request, res: Response) => userController.logout(req, res));

router.get('/history', async (req: Request, res: Response) => historyController.get(req, res));
router.post('/history', async (req: Request, res: Response) => historyController.update(req, res));
router.delete('/history', async (req: Request, res: Response) => historyController.delete(req, res));

router.get('/maintenance', async (req: Request, res: Response) => maintenanceController.index(req, res));
router.post('/maintenance/register', async (req: Request, res: Response) => maintenanceController.register(req, res));

router.get('/bike', async (req: Request, res: Response) => bikeController.index(req, res));
router.get('/bike/register', async (req: Request, res: Response) => bikeController.getRegister(req, res));
router.post('/bike/register', async (req: Request, res: Response) => bikeController.postRegister(req, res));
router.get('/bike/have', async (req: Request, res: Response) => bikeController.getHaveBike(req, res));

router.get('/graph', async (req: Request, res: Response) => historyGraphController.index(req, res));
router.get('/api/graph', async (req: Request, res: Response) => historyGraphController.getDataList(req, res));
router.get('/view3d', async (req: Request, res: Response) => view3DController.index(req, res));

export default router;