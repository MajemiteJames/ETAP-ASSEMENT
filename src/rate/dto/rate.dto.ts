import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { RoomType } from '../../reservation/reservation.enum';

export class GetRateDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(RoomType)
  room_type: RoomType;

  @IsNotEmpty()
  @IsDateString()
  expected_checkin_time: Date;

  @IsNotEmpty()
  @IsDateString()
  expected_checkout_time: Date;
}
