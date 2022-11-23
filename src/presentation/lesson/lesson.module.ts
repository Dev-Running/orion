import { LessonService } from '@/data/services'
import { PrismaService } from '@/infra/prisma'
import { LessonRepository } from '@/infra/repositories'
import { Module } from '@nestjs/common'
import { LessonController } from './lesson.controller'

@Module({
  imports: [],
  controllers: [LessonController],
  providers: [PrismaService, LessonService, LessonRepository],
})
export class LessonModule {}
