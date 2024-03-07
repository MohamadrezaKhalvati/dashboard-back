import { INestApplication, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { json, urlencoded } from 'express'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.use(json({ limit: '50mb' }))
  app.use(urlencoded({ extended: true, limit: '50mb' }))

  setupGlobalValidation(app)
  setupCors(app)
  swaggerBuilder(app)
  await app.listen(3000)
}

function setupCors(app: INestApplication) {
  app.enableCors()
}

function setupGlobalValidation(app: INestApplication) {
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
}

async function swaggerBuilder(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Dashboard admin')
    .setDescription('The Dashboard API description')
    .setVersion('1.0')
    .addTag('Dashboard admin')

    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api-doc', app, document)
}
bootstrap()
