import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { RoomType } from '../reservation.enum';

export class CreateReservationDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(RoomType)
  room_type: RoomType;

  @IsNotEmpty()
  @IsNumber()
  hourly_rate: number;

  @IsNotEmpty()
  @IsDateString()
  expected_checkin_time: string;

  @IsNotEmpty()
  @IsDateString()
  expected_checkout_time: string;
}
