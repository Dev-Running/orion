import { CourseService } from '@/data/services'
import { PrismaService } from '@/infra/prisma'
import { CourseRepository } from '@/infra/repositories'
import { CourseController } from '@/presentation/course'
import { Module } from '@nestjs/common'

@Module({
  imports: [],
  controllers: [CourseController],
  providers: [PrismaService, CourseService, CourseRepository],
})
export class CourseModule {}
