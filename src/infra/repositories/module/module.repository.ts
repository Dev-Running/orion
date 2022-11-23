import { ModuleContract } from '@/data/contracts'
import { ModuleModel } from '@/data/models'
import { PrismaService } from '@/infra/prisma'
import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'

@Injectable()
export class ModuleRepository implements ModuleContract {
  constructor(private prisma: PrismaService) {}
  async new(data: ModuleModel): Promise<ModuleModel> {
    const {
      id,
      courseID,
      createdAt,
      description,
      slug,
      title,
      deletedAt,
      updatedAt,
    } = new ModuleModel(
      randomUUID(),
      data.title,
      data.description,
      data.slug,
      data.courseID,
      new Date(),
    )
    const module = await this.prisma.module.create({
      data: {
        id,
        courseID,
        createdAt,
        description,
        slug,
        title,
        deletedAt,
        updatedAt,
      },
    })
    await this.prisma.course.update({
      where: { id: courseID },
      data: { modules: { connect: { id } } },
    })
    return module
  }

  async findAll(): Promise<ModuleModel[]> {
    return await this.prisma.module.findMany()
  }

  async findAllByCourseID(id: string): Promise<ModuleModel[]> {
    return await this.prisma.module.findMany({
      where: {
        courseID: id,
      },
    })
  }

  async findByID(id: string): Promise<ModuleModel> {
    return await this.prisma.module.findUnique({ where: { id } })
  }

  async update(idModule: string, data: any): Promise<ModuleModel> {
    return await this.prisma.module.update({
      where: {
        id: idModule,
      },
      data,
    })
  }

  async delete(id: string): Promise<object | Error> {
    return await this.prisma.module.delete({ where: { id } })
  }
}
