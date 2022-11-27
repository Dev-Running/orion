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
    const lesson = LessonModel.create(allData)

    await this.prisma.lesson.create({
      data: {
        id: lesson.id,
        link: lesson.link,
        createdAt: lesson.createdAt,
        description: lesson.description,
        slug: lesson.slug,
        title: lesson.title,
        courseID: lesson.courseID,
        moduleID: lesson.moduleID,
      },
    })

    await this.client.emit('polaris', {
      typeMessage: 'newLesson',
      message: lesson,
    })

    return lesson
  }

  async findByID(id: string): Promise<LessonModel> {
    const fetch = await this.prisma.lesson.findUnique({
      where: { id },
      include: { course: true, module: true },
    })

    return LessonModel.assign(fetch)
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

    return LessonModel.assign(lessonUpd)
  }

  async delete(id: string): Promise<LessonModel | ResponseContract> {
    const lessonDlt = await this.prisma.lesson.delete({ where: { id } })
    await this.client.emit('polaris', {
      typeMessage: 'deleteLesson',
      message: lessonDlt,
    })
    return LessonModel.assign(lessonDlt)
  }
}
