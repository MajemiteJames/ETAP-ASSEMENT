import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { RoomType } from '../../reservation/reservation.enum';
import { IsDateTimeFormat } from '../../common/validators/date-time.validator';

export class GetRateDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(RoomType)
  room_type: RoomType;

  @IsNotEmpty()
  @IsDateTimeFormat()
  expected_checkin_time: Date;

  @IsNotEmpty()
  @IsDateTimeFormat()
  expected_checkout_time: Date;
}
