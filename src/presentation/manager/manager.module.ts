import { ManagerService } from '@/data/services'
import { PrismaService } from '@/infra/prisma'
import { ManagerRepository } from '@/infra/repositories'
import { ManagerController } from '@/presentation'
import { Module } from '@nestjs/common'

@Module({
  imports: [],
  controllers: [ManagerController],
  providers: [ManagerService, PrismaService, ManagerRepository],
})
export class ManagerModule {}
