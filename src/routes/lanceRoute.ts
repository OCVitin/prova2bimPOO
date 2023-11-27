import express, { Request, Response } from 'express';
import { LanceController } from '../controllers/lanceController';

const router = express.Router();
const lanceController = new LanceController();

router.get('/leiloes', async (res: Response) => {
  await lanceController.getAllLances(res);
});

router.get('/leiloes/:id', async (req: Request, res: Response) => {
  await lanceController.getLanceById(req, res);
});

router.post('/leiloes', async (req: Request, res: Response) => {
  await lanceController.createLance(req, res);
});

router.delete('/leiloes/:id', async (req: Request, res: Response) => {
  await lanceController.deleteLance(req, res);
});

router.put('/leiloes/:id', async (req: Request, res: Response) => {
  await lanceController.updateLance(req, res);
});

export default router;