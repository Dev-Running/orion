import { CourseRepository } from '@/infra/repositories'
import { CourseService } from '@/infra/services'
import { CourseController } from '@/presentation/course'
import { PrismaService } from '@/prisma'
import { Module } from '@nestjs/common'

@Module({
  imports: [],
  controllers: [CourseController],
  providers: [PrismaService, CourseService, CourseRepository],
})
export class CourseModule {}
