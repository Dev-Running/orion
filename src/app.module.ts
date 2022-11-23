import { PrismaService } from '@/infra/prisma'
import { CourseModule } from '@/presentation/course'
import { ManagerModule } from '@/presentation/manager'
import { Module } from '@nestjs/common'

@Module({
  imports: [ManagerModule, CourseModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
