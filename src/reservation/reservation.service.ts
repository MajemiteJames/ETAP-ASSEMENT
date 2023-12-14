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
  async getReservationById(id: string): Promise<Reservation> {
    const found = await this.reservationRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Reservation with ID "${id}" not found`);
    }
    return found;
  }
  // createReservation(createReservationDto: CreateReservationDto): Reservation {
  //   const { room_type, expected_checkin_time, expected_checkout_time } =
  //     createReservationDto;
  //   const reservation: Reservation = {
  //     id: uuid(),
  //     room_type,
  //     hourly_rate: 0,
  //     status: ReservationStatus.NOTPAID,
  //     expected_checkin_time,
  //     expected_checkout_time,
  //     wallet: 0,
  //     reservation_status: false,
  //     reservation_checkedout: expected_checkout_time,
  //   };
  //   this.reservations.push(reservation);
  //   return reservation;
  // }
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
