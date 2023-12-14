import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Reservation } from './reservation.model';

@Controller('reservations')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}

  @Get()
  getAllReservation(): Reservation[] {
    return this.reservationService.getAllReservation();
  }

  @Post()
  createReservation(
    @Body('room_type') room_type: string,
    @Body('expected_checkin_time') expected_checkin_time: Date,
    @Body('expected_checkout_time') expected_checkout_time: Date,
  ): Reservation {
    return this.reservationService.createReservation(
      room_type,
      expected_checkin_time,
      expected_checkout_time,
    );
  }
}
