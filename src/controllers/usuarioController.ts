import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuarioService';

const usuarioService = new UsuarioService();

export class UsuarioController {
  public async getAllUsuarios(res: Response): Promise<void> {
    try {
      const usuarios = await usuarioService.getAllUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: `Erro ao buscar usuários.` });
    }
  }

  public async getUsuarioById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const usuario = await usuarioService.getUsuarioById(parseInt(id, 10));
      
      if (usuario) {
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: `Erro ao buscar usuário.` });
    }
  }

  public async createUsuario(req: Request, res: Response): Promise<void> {
    try {
      const { nome, email } = req.body;
      const novoUsuario = await usuarioService.createUsuario({ nome, email });

      res.status(201).json(novoUsuario);
    } catch (error) {
      res.status(500).json({ error: `Erro ao criar usuário.` });
    }
  }

  public async deleteUsuario(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const usuario = await usuarioService.deleteUsuario(parseInt(id, 10));
      
      if (usuario) {
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: `Erro ao excluir usuário.` });
    }
  }

  public async updateUsuario(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      const usuarioAtualizado = await usuarioService.updateUsuario(parseInt(id, 10), { nome, email });

      if (usuarioAtualizado) {
        res.status(200).json(usuarioAtualizado);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: `Erro ao atualizar usuário.` });
    }
  }
}