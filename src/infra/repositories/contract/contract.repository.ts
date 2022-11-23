import { ContractContract, ResponseContract } from '@/data/contracts'
import { ContractModel } from '@/data/models/contract.models'
import { PrismaService } from '@/infra/prisma'
import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'

@Injectable()
export class ContractRepository implements ContractContract {
  constructor(private prisma: PrismaService) {}

  async new(data: ContractModel): Promise<ContractModel | ResponseContract> {
    const Contract = new ContractModel(
      randomUUID(),
      new Date(),
      data.userID,
      data.courseID,
    )
    const contract = await this.prisma.contract.create({ data: Contract })

    await this.prisma.course.update({
      where: { id: data.courseID },
      data: { contracts: { connect: { id: contract.id } } },
    })
    return contract
  }

  async findAll(): Promise<ResponseContract | ContractModel[]> {
    return await this.prisma.contract.findMany()
  }

  async findByID(id: string): Promise<ContractModel | ResponseContract> {
    return await this.prisma.contract.findUnique({ where: { id } })
  }

  async cancelContract(id: string): Promise<ContractModel | ResponseContract> {
    return await this.prisma.contract.update({
      where: { id },
      data: { canceledAt: new Date() },
    })
  }

  async update(
    idContract: string,
    data: any,
  ): Promise<ContractModel | ResponseContract> {
    return await this.prisma.contract.update({
      where: { id: idContract },
      data,
    })
  }
}
