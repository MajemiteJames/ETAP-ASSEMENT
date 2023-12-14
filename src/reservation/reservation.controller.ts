import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:id')
  getReservationById(@Param('id') id: string): Reservation {
    return this.reservationService.getReservationById(id);
  }

  @Post()
  createReservation(
    @Body() createReservationDto: createReservationDto,
  ): Reservation {
    return this.reservationService.createReservation(createReservationDto);
  }
}
