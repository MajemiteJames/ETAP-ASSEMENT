import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { RoomType } from '../reservation.model';

export class CreateReservationDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(RoomType)
  room_type: RoomType;

  @IsNotEmpty()
  @IsDateString()
  expected_checkin_time: string;

  @IsNotEmpty()
  @IsDateString()
  expected_checkout_time: string;
}
