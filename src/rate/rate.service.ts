import { Injectable } from '@nestjs/common';
import { GetRateDto } from './dto/rate.dto';
import { Rate } from './rate.model';

@Injectable()
export class RateService {
  private rates: Rate[] = [];
  getRate(getRateDto: GetRateDto): Rate {
    const dateInitial = new Date(getRateDto.expected_checkin_time).valueOf();
    const dateFinal = new Date(getRateDto.expected_checkout_time).valueOf();
    // Calculate the difference in milliseconds
    const timeDifference = Math.abs(dateFinal - dateInitial);

    // Convert milliseconds to hours
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    if (getRateDto.room_type === 'DELUXE') {
      const rate: Rate = {
        room_type: getRateDto.room_type,
        expected_checkin_time: getRateDto.expected_checkout_time,
        expected_checkout_time: getRateDto.expected_checkout_time,
        charge: hoursDifference * 230000,
      };

      return rate;
    }

    if (getRateDto.room_type === 'REGULAR') {
      const rate: Rate = {
        room_type: getRateDto.room_type,
        expected_checkin_time: getRateDto.expected_checkout_time,
        expected_checkout_time: getRateDto.expected_checkout_time,
        charge: hoursDifference * 150000,
      };

      return rate;
    }

    if (getRateDto.room_type === 'PALATIAL') {
      const rate: Rate = {
        room_type: getRateDto.room_type,
        expected_checkin_time: getRateDto.expected_checkout_time,
        expected_checkout_time: getRateDto.expected_checkout_time,
        charge: hoursDifference * 560000,
      };

      return rate;
    }
  }
}
