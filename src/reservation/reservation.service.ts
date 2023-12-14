import { Injectable, NotFoundException } from '@nestjs/common';
import { Reservation, ReservationStatus } from './reservation.model';
import { v4 as uuid } from 'uuid';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationService {
  private reservations: Reservation[] = [];

  getAllReservation(): Reservation[] {
    return this.reservations;
  }

  getReservationById(id: string): Reservation {
    const found = this.reservations.find(
      (reservation) => reservation.id === id,
    );
    if (!found) {
      throw new NotFoundException(`Reservation with ID "${id}" not found`);
    }
    return found;
  }

  createReservation(createReservationDto: CreateReservationDto): Reservation {
    const { room_type, expected_checkin_time, expected_checkout_time } =
      createReservationDto;
    const reservation: Reservation = {
      id: uuid(),
      room_type,
      hourly_rate: 0,
      status: ReservationStatus.NOTPAID,
      expected_checkin_time,
      expected_checkout_time,
      wallet: 0,
      reservation_status: false,
      reservation_checkedout: expected_checkout_time,
    };

    this.reservations.push(reservation);

    return reservation;
  }

  deleteReservation(id: string): void {
    const found = this.getReservationById(id);
    this.reservations = this.reservations.filter(
      (reservation) => reservation.id !== found.id,
    );
  }

  updateReservationStatus(id: string, status: ReservationStatus) {
    const reservation = this.getReservationById(id);
    reservation.status = status;
    return reservation;
  }
}
