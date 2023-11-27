import { PrismaClient, Lance } from '@prisma/client';

const prisma = new PrismaClient();

export class LanceService {
  public async getAllLances(): Promise<Lance[]> {
    try {
      return await prisma.lance.findMany();
    } catch (error) {
      throw new Error(`Erro ao buscar todos os lances: ${error}`);
    }
  }

  public async getLanceById(id: number): Promise<Lance | null> {
    try {
      return await prisma.lance.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Erro ao buscar lance por ID: ${error}`);
    }
  }

  public async createLance(data: {
    valor: number;
    leilaoId: number;
    compradorId: number;
    
  }): Promise<Lance> {
    try {
      return await prisma.lance.create({
        data,
      });
    } catch (error) {
      throw new Error(`Erro ao criar lance: ${error}`);
    }
  }

  public async deleteLance(id: number): Promise<Lance | null> {
    try {
      const lance = await prisma.lance.delete({
        where: {
          id,
        },
      });

      return lance;
    } catch (error) {
      throw new Error(`Erro ao excluir lance: ${error}`);
    }
  }

  public async updateLance(id: number, data: {
    valor?: number;
    leilaoId?: number;
    compradorId?: number;
    
  }): Promise<Lance | null> {
    try {
      return await prisma.lance.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Erro ao atualizar lance: ${error}`);
    }
  }
}