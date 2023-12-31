import { Injectable, NotFoundException } from '@nestjs/common';
import { ReservationStatus } from './reservation.enum';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { ReservationRepository } from './reservation.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './reservation.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(ReservationRepository)
    private reservationRepository: ReservationRepository,
  ) {}

  async getAllReservation(): Promise<Reservation[]> {
    return this.reservationRepository.find();
  }

  async getReservationById(id: number): Promise<Reservation> {
    const found = await this.reservationRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Reservation with ID "${id}" not found`);
    }
    return found;
  }

  createReservation(
    createReservationDto: CreateReservationDto,
    user: User,
  ): Promise<Reservation> {
    return this.reservationRepository.createReservation(
      createReservationDto,
      user,
    );
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
