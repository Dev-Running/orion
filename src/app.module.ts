import { ManagerModule } from '@/presentation'
import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'

@Module({
  imports: [ManagerModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
