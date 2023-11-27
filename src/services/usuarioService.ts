import { PrismaClient, Usuario } from '@prisma/client';

const prisma = new PrismaClient();

export class UsuarioService {
  constructor(){}
  public async getAllUsuarios(): Promise<Usuario[]> {
      return await prisma.usuario.findMany();
  }

  public async getUsuarioById(id: number): Promise<Usuario | null> {
      return await prisma.usuario.findUnique({
        where: { id },
      });
  }

  public async createUsuario(data: {
    nome: string;
    email: string;
  }): Promise<Usuario> {
      return await prisma.usuario.create({
        data,
      });
  }

  public async deleteUsuario(id: number): Promise<Usuario | null> {
      await prisma.leilao.deleteMany({
        where: {
          donoId: id,
        },
      });

      await prisma.lance.deleteMany({
        where: {
          compradorId: id,
        },
      });
      
      const usuario = await prisma.usuario.delete({
        where: {
          id,
        },
      });

      return usuario;
  }

  public async updateUsuario(id: number, data: {
    nome?: string;
    email?: string;
  }): Promise<Usuario | null> {
      return await prisma.usuario.update({
        where: { id },
        data,
      });
  }
}