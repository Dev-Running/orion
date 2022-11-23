import { ManagerContract } from '@/data/contracts'
import { ManagerModel } from '@/data/models'
import { Manager as Man } from '@/domain/entities'
import { PrismaService } from '@/infra/prisma'
import { Injectable } from '@nestjs/common'
import { genSaltSync, hashSync } from 'bcrypt'
import { randomUUID } from 'crypto'
@Injectable()
export class ManagerRepository implements ManagerContract {
  constructor(private prisma: PrismaService) {}
  async new(data: ManagerModel): Promise<ManagerModel> {
    const salt = genSaltSync(10)
    const hash = hashSync(data.password, salt)
    const user = new Man(randomUUID(), data.name, data.email, hash, new Date())
    const { id, email, name, password } = user

    return await this.prisma.manager.create({
      data: { id, email, name, password, createdAt: new Date() },
    })
  }

  async findAll(): Promise<ManagerModel[]> {
    return await this.prisma.manager.findMany()
  }

  async findByID(id: string): Promise<ManagerModel> {
    return await this.prisma.manager.findUnique({ where: { id } })
  }

  async delete(id: string): Promise<ManagerModel> {
    return await this.prisma.manager.delete({ where: { id } })
  }
  async update(idManager: string, data: any): Promise<ManagerModel> {
    return await this.prisma.manager.update({
      where: { id: idManager },
      data,
    })
  }
}
