import { CourseContract, ResponseContract } from '@/data/contracts'
import { CourseModel } from '@/data/models'
import { PrismaService } from '@/infra/prisma'
import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'

@Injectable()
export class CourseRepository implements CourseContract {
  constructor(private prisma: PrismaService) {}
  async new(data: CourseModel): Promise<CourseModel> {
    const {
      id,
      createdAt,
      deletedAt,
      description,
      image,
      slug,
      title,
      updatedAt,
    } = await this.prisma.course.create({
      data: {
        id: randomUUID(),
        slug: data.slug,
        createdAt: new Date(),
        image: data.image,
        description: data.description,
        title: data.title,
      },
    })
    return new CourseModel(
      id,
      title,
      slug,
      description,
      image,
      createdAt,
      updatedAt,
    )
  }
  async findAll(): Promise<CourseModel[]> {
    return await this.prisma.course.findMany({
      include: {
        modules: { include: { lessons: true } },
        contracts: { select: { id: true } },
      },
    })
  }
  async findByID(id: string): Promise<CourseModel> {
    return await this.prisma.course.findUnique({
      where: { id: id },
      include: {
        modules: { include: { lessons: true } },
        contracts: { select: { id: true } },
      },
    })
  }
  async update(idCourse: string, data: any): Promise<CourseModel> {
    return await this.prisma.course.update({
      where: { id: idCourse },
      data: data,
    })
  }
  async delete(id: string): Promise<CourseModel | ResponseContract> {
    return await this.prisma.course.delete({ where: { id } })
  }
}
