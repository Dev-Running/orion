import { PrismaService } from '@/infra/prisma'
import { CourseModule, ManagerModule, ModuleModule } from '@/presentation'
import { Module } from '@nestjs/common'

@Module({
  imports: [ManagerModule, CourseModule, ModuleModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
