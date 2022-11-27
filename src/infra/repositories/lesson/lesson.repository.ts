import { LessonContract, ResponseContract } from '@/data/contracts'
import { LessonModel } from '@/data/models'
import { Lesson } from '@/domain/entities'
import { PrismaService } from '@/infra/prisma'
import { Inject, Injectable } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'

@Injectable()
export class LessonRepository implements LessonContract {
  constructor(
    private prisma: PrismaService,
    @Inject('ORION') private client: ClientKafka,
  ) {}

  async new(allData: Lesson): Promise<LessonModel> {
    const data = new LessonModel(
      allData.title,
      allData.slug,
      allData.description,
      allData.link,
      allData.moduleID,
      allData.courseID,
    )

    const lesson = await this.prisma.lesson.create({
      data: {
        id: data.id,
        link: data.link,
        createdAt: data.createdAt,
        description: data.description,
        slug: data.slug,
        title: data.title,
        courseID: data.courseID,
        moduleID: data.moduleID,
      },
      include: { course: true, module: true },
    })

    await this.client.emit('polaris', {
      typeMessage: 'newLesson',
      message: lesson,
    })

    return lesson
  }

  async findByID(id: string): Promise<LessonModel> {
    return await this.prisma.lesson.findUnique({
      where: { id },
      include: { course: true, module: true },
    })
  }

  async findAll(): Promise<LessonModel[]> {
    return await this.prisma.lesson.findMany({
      include: { course: true, module: true },
    })
  }

  async update(idLesson: string, data: any): Promise<LessonModel> {
    const lessonUpd = await this.prisma.lesson.update({
      where: { id: idLesson },
      data,
    })
    await this.client.emit('polaris', {
      typeMessage: 'updateLesson',
      message: lessonUpd,
    })
    return lessonUpd
  }

  async delete(id: string): Promise<LessonModel | ResponseContract> {
    const lessonDlt = await this.prisma.lesson.delete({ where: { id } })
    await this.client.emit('polaris', {
      typeMessage: 'deleteLesson',
      message: lessonDlt,
    })
    return lessonDlt
  }
}
