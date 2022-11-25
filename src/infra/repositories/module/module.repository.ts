import { ModuleContract } from '@/data/contracts'
import { ModuleModel } from '@/data/models'
import { PrismaService } from '@/infra/prisma'
import { Inject, Injectable } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { randomUUID } from 'crypto'

@Injectable()
export class ModuleRepository implements ModuleContract {
  constructor(
    private prisma: PrismaService,
    @Inject('ORION') private client: ClientKafka,
  ) {}
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
    await this.client.emit('polaris', {
      typeMessage: 'newModule',
      message: module,
    })
    await this.prisma.course.update({
      where: { id: courseID },
      data: { modules: { connect: { id } } },
    })
    return module
  }

  async findAll(): Promise<ModuleModel[]> {
    await this.client.emit('polaris', {
      typeMessage: 'teste',
      message: 'test message',
    })
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
    const moduleUpd = await this.prisma.module.update({
      where: {
        id: idModule,
      },
      data,
    })
    await this.client.emit('polaris', {
      typeMessage: 'updateModule',
      message: moduleUpd,
    })
    return moduleUpd
  }

  async delete(id: string): Promise<ModuleModel> {
    const moduleDlt = await this.prisma.module.delete({ where: { id } })
    await this.client.emit('polaris', {
      typeMessage: 'deleteModule',
      message: moduleDlt,
    })
    return moduleDlt
  }
}
