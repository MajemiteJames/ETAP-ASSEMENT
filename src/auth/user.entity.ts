import { Reservation } from 'src/reservation/reservation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  Customer_id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany((_type) => Reservation, (reservation) => reservation.user, {
    eager: true,
  })
  reservations: Reservation[];
}
