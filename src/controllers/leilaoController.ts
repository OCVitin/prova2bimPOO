import { Request, Response } from 'express';
import { LeilaoService } from '../services/leilaoService';

const leilaoService = new LeilaoService();

export class LeilaoController {
  public async getAllLeiloes(res: Response): Promise<void> {
    try {
      const leiloes = await leilaoService.getAllLeiloes();
      res.status(200).json(leiloes);
    } catch (error) {
      res.status(500).json({ error: `Erro ao buscar leilões.` });
    }
  }

  public async getLeilaoById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const leilao = await leilaoService.getLeilaoById(parseInt(id, 10));
      
      if (leilao) {
        res.status(200).json(leilao);
      } else {
        res.status(404).json({ error: 'Leilão não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: `Erro ao buscar leilão.` });
    }
  }

  public async createLeilao(req: Request, res: Response): Promise<void> {
    try {
      const { produto, preco, datalimite, donoId } = req.body;
      const novoLeilao = await leilaoService.createLeilao({ produto, preco, datalimite, donoId });

      res.status(201).json(novoLeilao);
    } catch (error) {
      res.status(500).json({ error: `Erro ao criar leilão.` });
    }
  }

  public async deleteLeilao(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const leilao = await leilaoService.deleteLeilao(parseInt(id, 10));
      
      if (leilao) {
        res.status(200).json(leilao);
      } else {
        res.status(404).json({ error: 'Leilão não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: `Erro ao excluir leilão.` });
    }
  }

  public async updateLeilao(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { produto, preco, datalimite, donoId } = req.body;
      const leilaoAtualizado = await leilaoService.updateLeilao(parseInt(id, 10), { produto, preco, datalimite, donoId });

      if (leilaoAtualizado) {
        res.status(200).json(leilaoAtualizado);
      } else {
        res.status(404).json({ error: 'Leilão não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: `Erro ao atualizar leilão.` });
    }
  }
}