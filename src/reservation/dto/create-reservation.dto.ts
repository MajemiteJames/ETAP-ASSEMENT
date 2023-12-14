import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { RoomType } from '../reservation.enum';
import { IsDateTimeFormat } from '../../common/validators/date-time.validator';

export class CreateReservationDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(RoomType)
  room_type: RoomType;

  @IsNotEmpty()
  @IsNumber()
  hourly_rate: number;

  @IsNotEmpty()
  @IsDateTimeFormat()
  expected_checkin_time: string;

  @IsNotEmpty()
  @IsDateTimeFormat()
  expected_checkout_time: string;
}
