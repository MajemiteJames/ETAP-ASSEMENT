import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationRepository } from './reservation.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationRepository]), AuthModule],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
