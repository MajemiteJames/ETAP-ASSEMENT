import { IsEnum } from 'class-validator';
import { ReservationStatus } from '../reservation.model';

export class UpdateReservationStatusDto {
  @IsEnum(ReservationStatus)
  status: ReservationStatus;
}
