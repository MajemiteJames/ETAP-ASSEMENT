import { Injectable } from '@nestjs/common';
import { Reservation, ReservationStatus } from './reservation.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ReservationService {
  private reservations: Reservation[] = [];

  getAllReservation(): Reservation[] {
    return this.reservations;
  }

  createReservation(
    room_type: string,
    expected_checkin_time: Date,
    expected_checkout_time: Date,
  ): Reservation {
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
