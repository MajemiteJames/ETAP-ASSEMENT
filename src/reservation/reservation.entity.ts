import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RoomType, ReservationStatus } from './reservation.enum';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  reservation_id: number;

  @Column()
  room_type: RoomType;

  @Column()
  hourly_rate: number;

  @Column()
  status: ReservationStatus;

  @Column()
  expected_checkin_time: string;

  @Column()
  expected_checkout_time: string;

  @Column()
  wallet: number;

  @Column()
  reservation_checkedIn: string;

  @Column()
  reservation_checkedout: string;
}
