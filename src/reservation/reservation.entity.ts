import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { RoomType, ReservationStatus } from './reservation.enum';
import { User } from 'src/auth/user.entity';

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

  @ManyToOne((_type) => User, (user) => user.reservations, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}
