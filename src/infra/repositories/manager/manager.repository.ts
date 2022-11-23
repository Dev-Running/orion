import { ManagerModel } from '@/data/models/manager.models'
import { Manager as Man } from '@/domain/entities'
import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'
@Injectable()
export class ManagerRepository implements ManagerRepository {
  constructor(private prisma: PrismaService) {}
  async new(data: ManagerModel): Promise<ManagerModel> {
    const user = new Man(
      randomUUID(),
      data.name,
      data.email,
      data.password,
      new Date(),
    )
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

  async delete(id: string): Promise<Error | string> {
    return await this.prisma.manager
      .delete({ where: { id } })
      .then((res) => 'deleted')
      .catch((err) => err)
  }
  async update(idManager: string, data: any): Promise<ManagerModel> {
    return await this.prisma.manager.update({
      where: { id: idManager },
      data,
    })
  }
}
