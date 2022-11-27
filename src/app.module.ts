import { PrismaService } from '@/infra/prisma'
import {
  ContractModule,
  CourseModule,
  LessonModule,
  ManagerModule,
  ModuleModule,
} from '@/presentation'
import { Module } from '@nestjs/common'

@Module({
  imports: [
    ManagerModule,
    CourseModule,
    ModuleModule,
    LessonModule,
    ContractModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
