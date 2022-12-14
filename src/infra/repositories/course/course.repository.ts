import { CourseContract, ResponseContract } from '@/data/contracts'
import { CourseModel } from '@/data/models'
import { PrismaService } from '@/infra/prisma'
import { Inject, Injectable } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'

@Injectable()
export class CourseRepository implements CourseContract {
  constructor(
    private prisma: PrismaService,
    @Inject('ORION') private client: ClientKafka,
  ) {}
  async new(data: CourseModel): Promise<CourseModel> {
    const course = CourseModel.create(data)
    await this.prisma.course.create({
      data: {
        id: course.id,
        slug: course.slug,
        createdAt: course.createdAt,
        image: course.image,
        description: course.description,
        title: course.title,
        updatedAt: course.updatedAt,
      },
    })

    await this.client.emit('polaris', {
      typeMessage: 'newCourse',
      message: {
        id: course.id,
        slug: course.slug,
        createdAt: course.createdAt,
        image: course.image,
        description: course.description,
        title: course.title,
      },
    })
    return course
  }
  async findAll(): Promise<CourseModel[]> {
    return await this.prisma.course.findMany({
      include: {
        modules: { include: { lessons: true } },
      },
    })
  }
  async findByID(id: string): Promise<CourseModel> {
    const fetch = await this.prisma.course.findUnique({
      where: { id: id },
      include: {
        modules: { include: { lessons: true } },
      },
    })

    const course = CourseModel.assign(fetch)
    return course
  }
  async update(idCourse: string, data: any): Promise<CourseModel> {
    const courseUpd = await this.prisma.course.update({
      where: { id: idCourse },
      data: data,
    })

    await this.client.emit('polaris', {
      typeMessage: 'updateCourse',
      message: courseUpd,
    })
    const course = CourseModel.assign(courseUpd)
    return course
  }
  async delete(id: string): Promise<CourseModel | ResponseContract> {
    const courseDeleted = await this.prisma.course.delete({ where: { id } })
    await this.client.emit('polaris', {
      typeMessage: 'deleteCourse',
      message: courseDeleted,
    })

    const course = CourseModel.assign(courseDeleted)
    return course
  }
}
