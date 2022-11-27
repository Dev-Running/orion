import { ContractContract, ResponseContract } from '@/data/contracts'
import { ContractModel } from '@/data/models/contract.models'
import { PrismaService } from '@/infra/prisma'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ContractRepository implements ContractContract {
  constructor(private prisma: PrismaService) {}

  async new(data: ContractModel): Promise<ContractModel | ResponseContract> {
    const contract = ContractModel.create(data)

    await this.prisma.contract.create({
      data: {
        id: contract.id,
        userID: contract.userID,
        createdAt: contract.canceledAt,
        courseID: contract.courseID,
      },
    })

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
    const contract = await this.prisma.contract.findUnique({ where: { id } })
    return ContractModel.assign(contract)
  }

  async cancelContract(id: string): Promise<ContractModel | ResponseContract> {
    const contract = await this.prisma.contract.update({
      where: { id },
      data: { canceledAt: new Date() },
    })
    return ContractModel.assign(contract)
  }

  async update(
    idContract: string,
    data: any,
  ): Promise<ContractModel | ResponseContract> {
    const contract = await this.prisma.contract.update({
      where: { id: idContract },
      data,
    })
    return ContractModel.assign(contract)
  }
}
