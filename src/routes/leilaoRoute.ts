import express, { Request, Response } from 'express';
import { LeilaoController } from '../controllers/leilaoController';

const router = express.Router();
const leilaoController = new LeilaoController();

router.get('/leiloes', async (res: Response) => {
  await leilaoController.getAllLeiloes(res);
});

router.get('/leiloes/:id', async (req: Request, res: Response) => {
  await leilaoController.getLeilaoById(req, res);
});

router.post('/leiloes', async (req: Request, res: Response) => {
  await leilaoController.createLeilao(req, res);
});

router.delete('/leiloes/:id', async (req: Request, res: Response) => {
  await leilaoController.deleteLeilao(req, res);
});

router.put('/leiloes/:id', async (req: Request, res: Response) => {
  await leilaoController.updateLeilao(req, res);
});

export default router;