import { Injectable } from '@nestjs/common';

@Injectable()
export class ReservationService {
  private reservation = [];

  getAllReservation() {
    return this.reservation;
  }
}
