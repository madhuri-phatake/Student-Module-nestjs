// import { ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { AppModule } from './app.module';
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalPipes(
//     new ValidationPipe({
//       disableErrorMessages: false,
//       whitelist: true,
//       forbidNonWhitelisted: true,
//     }),
//   );

//   const config = new DocumentBuilder()
//     .setTitle('Cats example')
//     .setDescription('The cats API description')
//     .setVersion('1.0')
//     .addTag('cats')
//     .build();
//   const document = SwaggerModule.createDocument(app, config);
//   app.useGlobalPipes(new ValidationPipe());

//   SwaggerModule.setup('api', app, document);
//   app.enableCors();
//   await app.listen(4000);
// }
// bootstrap();

//   const config = new DocumentBuilder()
//     .setTitle('Cats example')
//     .setDescription('The cats API description')
//     .setVersion('1.0')
//     .addTag('cats')
//     .build();
//   const document = SwaggerModule.createDocument(app, config);
//   app.useGlobalPipes(new ValidationPipe());

//   SwaggerModule.setup('api', app, document);
// app.enableCors();
//   await app.listen(4000);
// }
// bootstrap();
// import { ValidationPipe } from '@nestjs/common';

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalPipes(new ValidationPipe({
//     disableErrorMessages:false,
//     whitelist:true,
//     forbidNonWhitelisted:true
//   }))

//   // app.setGlobalPrefix('book');
//   await app.listen(3003);
// }
// bootstrap();
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      enableDebugMessages: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Book Management')
    .setDescription('Add show Edit Delete -> Book data')
    .setVersion('1.0')
    .addTag('Group D Assignment')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(4000);
}
bootstrap();

