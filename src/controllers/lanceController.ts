import { Request, Response } from 'express';
import { LanceService } from '../services/lanceService';

const lanceService = new LanceService();

export class LanceController {
  public async getAllLances(res: Response): Promise<void> {
    try {
      const lances = await lanceService.getAllLances();
      res.status(200).json(lances);
    } catch (error) {
      res.status(500).json({ error: `Erro ao buscar lances.` });
    }
  }

  public async getLanceById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const lance = await lanceService.getLanceById(parseInt(id, 10));
      
      if (lance) {
        res.status(200).json(lance);
      } else {
        res.status(404).json({ error: 'Lance não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: `Erro ao buscar lance.` });
    }
  }

  public async createLance(req: Request, res: Response): Promise<void> {
    try {
      const { valor, leilaoId, compradorId } = req.body;
      const novoLance = await lanceService.createLance({ valor, leilaoId, compradorId });

      res.status(201).json(novoLance);
    } catch (error) {
      res.status(500).json({ error: `Erro ao criar lance.` });
    }
  }

  public async deleteLance(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const lance = await lanceService.deleteLance(parseInt(id, 10));
      
      if (lance) {
        res.status(200).json(lance);
      } else {
        res.status(404).json({ error: 'Lance não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: `Erro ao excluir lance.` });
    }
  }

  public async updateLance(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { valor, leilaoId, compradorId } = req.body;
      const lanceAtualizado = await lanceService.updateLance(parseInt(id, 10), { valor, leilaoId, compradorId });

      if (lanceAtualizado) {
        res.status(200).json(lanceAtualizado);
      } else {
        res.status(404).json({ error: 'Lance não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: `Erro ao atualizar lance.` });
    }
  }
}