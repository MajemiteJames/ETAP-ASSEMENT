// src/swagger/swagger.module.ts
import { Module } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

@Module({})
export class SwaggerModules {
  static createDocument(app) {
    const options = new DocumentBuilder()
      .setTitle('ETAP Assessment Question')
      .setDescription(
        'Build an API that will calculate overstay fees for the customer',
      )
      .setVersion('1.0')
      .addTag('Hotel Management')
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }
}
