import { ModuleService } from '@/data/services/module/module.service'
import { PrismaService } from '@/infra/prisma'
import { ModuleRepository } from '@/infra/repositories'
import { ModuleController } from '@/presentation'
import { Inject, Module } from '@nestjs/common'
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices'
import { Partitioners } from 'kafkajs'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORION',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'orion',
            brokers: ['broker1:9091'],
          },
          send: {
            acks: -1,
          },
          producer: {
            createPartitioner: Partitioners.LegacyPartitioner,
            allowAutoTopicCreation: true,
          },
          producerOnlyMode: true,
        },
      },
    ]),
  ],
  controllers: [ModuleController],
  providers: [ModuleService, PrismaService, ModuleRepository],
})
export class ModuleModule {
  constructor(@Inject('ORION') clientKafka: ClientKafka) {
    clientKafka.connect()
  }
}
