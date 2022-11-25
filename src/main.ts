import { AppModule } from '@/app.module'
import { NestFactory } from '@nestjs/core'
import "module-alias/register"
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: { origin: '*' } })
  await app.listen(3232)
}
bootstrap()
