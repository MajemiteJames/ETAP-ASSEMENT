import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Reservation } from './reservation.model';
import { createReservationDto } from './dto/create-reservation.dto';

@Controller('reservations')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}

  @Get()
  getAllReservation(): Reservation[] {
    return this.reservationService.getAllReservation();
  }

  @Post()
  createReservation(
    @Body() createReservationDto: createReservationDto,
  ): Reservation {
    return this.reservationService.createReservation(createReservationDto);
  }
}
