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
import { ReservationStatus } from './reservation.enum';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationStatusDto } from './dto/update-reservation.dto';
import { Reservation } from './reservation.entity';

@Controller('reservations')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}

  // @Get()
  // getAllReservation(): Reservation[] {
  //   return this.reservationService.getAllReservation();
  // }

  @Get('/:id')
  getReservationById(@Param('id') id: number): Promise<Reservation> {
    return this.reservationService.getReservationById(id);
  }

  @Post()
  createReservation(
    @Body() createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    return this.reservationService.createReservation(createReservationDto);
  }

  @Delete('/:id')
  deleteReservation(@Param('id') id: number): Promise<void> {
    return this.reservationService.deleteReservation(id);
  }

  @Patch('/:id/status')
  updateReservationStatus(
    @Param('id') id: number,
    @Body() updateReservationStatusDto: UpdateReservationStatusDto,
  ): Promise<Reservation> {
    const { status } = updateReservationStatusDto;
    return this.reservationService.updateReservationStatus(id, status);
  }
}
