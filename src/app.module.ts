import { ManagerModule } from '@/presentation'
import { CourseModule } from '@/presentation/course'
import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'

@Module({
  imports: [ManagerModule, CourseModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
