import { LessonContract, ResponseContract } from '@/data/contracts'
import { LessonModel } from '@/data/models'
import { Lesson } from '@/domain/entities'
import { PrismaService } from '@/infra/prisma'
import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'

@Injectable()
export class LessonRepository implements LessonContract {
  constructor(private prisma: PrismaService) {}

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
    return await this.prisma.lesson.update({ where: { id: idLesson }, data })
  }

  async delete(id: string): Promise<LessonModel | ResponseContract> {
    return await this.prisma.lesson.delete({ where: { id } })
  }
}
