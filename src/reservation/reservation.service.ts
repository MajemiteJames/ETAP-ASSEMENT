import { Injectable } from '@nestjs/common';
import { Reservation, ReservationStatus } from './reservation.model';
import { v4 as uuid } from 'uuid';
import { createReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationService {
  private reservations: Reservation[] = [];

  getAllReservation(): Reservation[] {
    return this.reservations;
  }

  getReservationById(id: string): Reservation {
    return this.reservations.find((reservation) => reservation.id === id);
  }

  createReservation(createReservationDto: createReservationDto): Reservation {
    const { room_type, expected_checkin_time, expected_checkout_time } =
      createReservationDto;
    const reservation: Reservation = {
      id: uuid(),
      room_type,
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
}
