import { Injectable, NotFoundException } from '@nestjs/common';
import { ReservationStatus } from './reservation.enum';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { ReservationRepository } from './reservation.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './reservation.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(ReservationRepository)
    private reservationRepository: ReservationRepository,
  ) {}
  // getAllReservation(): Reservation[] {
  //   return this.reservations;
  // }
  async getReservationById(id: number): Promise<Reservation> {
    const found = await this.reservationRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Reservation with ID "${id}" not found`);
    }
    return found;
  }

  createReservation(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    return this.reservationRepository.createReservation(createReservationDto);
  }
  // deleteReservation(id: string): void {
  //   const found = this.getReservationById(id);
  //   this.reservations = this.reservations.filter(
  //     (reservation) => reservation.id !== found.id,
  //   );
  // }
  // updateReservationStatus(id: string, status: ReservationStatus) {
  //   const reservation = this.getReservationById(id);
  //   reservation.status = status;
  //   return reservation;
  // }
}
