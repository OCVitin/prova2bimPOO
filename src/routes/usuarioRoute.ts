import express, { Request, Response } from 'express';
import { UsuarioController } from '../controllers/usuarioController';

const router = express.Router();
const usuarioController = new UsuarioController();

router.get('/usuarios', async (res: Response) => {
  await usuarioController.getAllUsuarios(res);
});

router.get('/usuarios/:id', async (req: Request, res: Response) => {
  await usuarioController.getUsuarioById(req, res);
});

router.post('/usuarios', async (req: Request, res: Response) => {
  await usuarioController.createUsuario(req, res);
});

router.delete('/usuarios/:id', async (req: Request, res: Response) => {
  await usuarioController.deleteUsuario(req, res);
});

router.put('/usuarios/:id', async (req: Request, res: Response) => {
  await usuarioController.updateUsuario(req, res);
});

export default router;