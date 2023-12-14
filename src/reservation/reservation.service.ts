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

  async deleteReservation(id: number): Promise<void> {
    const result = await this.reservationRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateReservationStatus(
    id: number,
    status: ReservationStatus,
  ): Promise<Reservation> {
    const reservation = await this.getReservationById(id);
    reservation.status = status;
    await this.reservationRepository.save(reservation);
    return reservation;
  }
}
