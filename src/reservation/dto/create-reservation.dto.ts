import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class createReservationDto {
  @IsNotEmpty()
  @IsString()
  room_type: string;

  @IsNotEmpty()
  @IsDateString()
  expected_checkin_time: string;

  @IsNotEmpty()
  @IsDateString()
  expected_checkout_time: string;
}
