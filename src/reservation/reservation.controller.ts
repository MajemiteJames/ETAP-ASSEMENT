import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Reservation, ReservationStatus } from './reservation.model';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationStatusDto } from './dto/update-reservation.dto';

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
    @Body() createReservationDto: CreateReservationDto,
  ): Reservation {
    return this.reservationService.createReservation(createReservationDto);
  }

  @Delete('/:id')
  deleteReservation(@Param('id') id: string) {
    return this.reservationService.deleteReservation(id);
  }

  @Patch('/:id/status')
  updateReservationStatus(
    @Param('id') id: string,
    @Body() updateReservationStatusDto: UpdateReservationStatusDto,
  ): Reservation {
    const { status } = updateReservationStatusDto;
    return this.reservationService.updateReservationStatus(id, status);
  }
}
