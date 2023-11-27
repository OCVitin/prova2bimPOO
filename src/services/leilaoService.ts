import { PrismaClient, Leilao } from '@prisma/client';

const prisma = new PrismaClient();

export class LeilaoService {
  public async getAllLeiloes(): Promise<Leilao[]> {
    try {
      return await prisma.leilao.findMany();
    } catch (error) {
      throw new Error(`Erro ao buscar todos os leilões: ${error}`);
    }
  }

  public async getLeilaoById(id: number): Promise<Leilao | null> {
    try {
      return await prisma.leilao.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Erro ao buscar leilão por ID: ${error}`);
    }
  }

  public async createLeilao(data: {
    produto: string;
    preco: number;
    datalimite: Date;
    donoId: number;
    
  }): Promise<Leilao> {
    try {
      return await prisma.leilao.create({
        data,
      });
    } catch (error) {
      throw new Error(`Erro ao criar leilão: ${error}`);
    }
  }

  public async deleteLeilao(id: number): Promise<Leilao | null> {
    try {
      await prisma.lance.deleteMany({
        where: {
          leilaoId: id,
        },
      });

      const leilao = await prisma.leilao.delete({
        where: {
          id,
        },
      });

      return leilao;
    } catch (error) {
      throw new Error(`Erro ao excluir leilão: ${error}`);
    }
  }

  public async updateLeilao(id: number, data: {
    produto?: string;
    preco?: number;
    datalimite?: Date;
    donoId?: number;

  }): Promise<Leilao | null> {
    try {
      return await prisma.leilao.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Erro ao atualizar leilão: ${error}`);
    }
  }
}