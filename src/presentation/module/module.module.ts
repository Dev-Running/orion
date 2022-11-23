import { ModuleService } from '@/data/services/module/module.service'
import { PrismaService } from '@/infra/prisma'
import { ModuleRepository } from '@/infra/repositories'
import { ModuleController } from '@/presentation'
import { Module } from '@nestjs/common'

@Module({
  controllers: [ModuleController],
  providers: [ModuleService, PrismaService, ModuleRepository],
})
export class ModuleModule {}
