import { ManagerRepository } from '@/infra/repositories'
import { ManagerService } from '@/infra/services'
import { ManagerController } from '@/presentation'
import { PrismaService } from '@/prisma/prisma.service'
import { Module } from '@nestjs/common'

@Module({
  imports: [],
  controllers: [ManagerController],
  providers: [ManagerService, PrismaService, ManagerRepository],
})
export class ManagerModule {}
