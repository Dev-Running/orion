import { ContractService } from '@/data/services/contract/contract.services'
import { PrismaService } from '@/infra/prisma'
import { ContractRepository } from '@/infra/repositories'
import { Module } from '@nestjs/common'
import { ContractController } from './contract.controller'

@Module({
  controllers: [ContractController],
  providers: [PrismaService, ContractRepository, ContractService],
})
export class ContractModule {}
