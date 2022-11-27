import { PrismaService } from '@/infra/prisma'
import {
  ContractModule,
  CourseModule,
  LessonModule,
  ManagerModule,
  ModuleModule,
} from '@/presentation'
import { Module } from '@nestjs/common'
import { TestModule } from './test/test.module';

@Module({
  imports: [
    ManagerModule,
    CourseModule,
    ModuleModule,
    LessonModule,
    ContractModule,
    TestModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
