import { LessonService } from '@/data/services'
import { PrismaService } from '@/infra/prisma'
import { LessonRepository } from '@/infra/repositories'
import { Inject, Module } from '@nestjs/common'
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices'
import { Partitioners } from 'kafkajs'
import { LessonController } from './lesson.controller'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORION',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'orion',
            brokers: ['localhost:9091', 'localhost:9092', 'localhost:9093'],
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
  controllers: [LessonController],
  providers: [PrismaService, LessonService, LessonRepository],
})
export class LessonModule {
  constructor(@Inject('ORION') clientKafka: ClientKafka) {
    clientKafka.connect()
  }
}
