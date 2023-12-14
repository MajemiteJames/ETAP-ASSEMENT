import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [
    ReservationModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      // type: 'postgres',
      // host: 'ruby.db.elephantsql.com',
      // username: 'ktroebhw',
      // password: 'Zs-AE58bpN2c5gWPz_GhVlHEkbD-SKmS',
      // database: 'ktroebhw',
      // autoLoadEntities: true,
      // synchronize: true,
    }),
  ],
})
export class AppModule {}
