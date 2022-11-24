import { LessonContract, ResponseContract } from '@/data/contracts'
import { LessonModel } from '@/data/models'
import { Lesson } from '@/domain/entities'
import { PrismaService } from '@/infra/prisma'
import { Inject, Injectable } from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { randomUUID } from 'crypto'

@Injectable()
export class LessonRepository implements LessonContract {
  constructor(
    private prisma: PrismaService,
    @Inject('ORION') private client: ClientKafka,
  ) {}

  async new(allData: Lesson): Promise<LessonModel> {
    const data = new LessonModel(
      randomUUID(),
      allData.title,
      allData.slug,
      allData.description,
      allData.link,
      allData.moduleID,
      allData.courseID,
      new Date(),
    )

    const lesson = await this.prisma.lesson.create({
      data,
      include: { course: true, module: true },
    })

    await this.client.emit('polaris', {
      typeMessage: 'newLesson',
      message: lesson,
    })

    await this.prisma.module.update({
      where: { id: lesson.moduleID },
      data: { lessons: { connect: { id: lesson.id } } },
    })

    await this.prisma.course.update({
      where: { id: lesson.courseID },
      data: { lessons: { connect: { id: lesson.id } } },
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
