import { IsEnum } from 'class-validator';
import { ReservationStatus } from '../reservation.enum';

export class UpdateReservationStatusDto {
  @IsEnum(ReservationStatus)
  status: ReservationStatus;
}
