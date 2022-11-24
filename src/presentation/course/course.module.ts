import { CourseService } from '@/data/services'
import { PrismaService } from '@/infra/prisma'
import { CourseRepository } from '@/infra/repositories'
import { CourseController } from '@/presentation/course'
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
  controllers: [CourseController],
  providers: [PrismaService, CourseService, CourseRepository],
})
export class CourseModule {
  constructor(@Inject('ORION') clientKafka: ClientKafka) {
    clientKafka.connect()
  }
}
