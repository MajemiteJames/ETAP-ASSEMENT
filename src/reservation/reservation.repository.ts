import { EntityRepository, Repository } from 'typeorm';
import { Reservation } from './reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { ReservationStatus } from './reservation.enum';

@EntityRepository(Reservation)
export class ReservationRepository extends Repository<Reservation> {
  async createReservation(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    const {
      room_type,
      expected_checkin_time,
      expected_checkout_time,
      hourly_rate,
    } = createReservationDto;
    const reservation = this.create({
      room_type,
      hourly_rate,
      status: ReservationStatus.NOTPAID,
      expected_checkin_time,
      expected_checkout_time,
      wallet: 0,
      reservation_checkedIn: expected_checkin_time,
      reservation_checkedout: expected_checkout_time,
    });
    await this.save(reservation);
    return reservation;
  }
}
