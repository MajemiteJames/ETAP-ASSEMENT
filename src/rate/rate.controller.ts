import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { RateService } from './rate.service';
import { GetRateDto } from './dto/rate.dto';
import { Rate } from './rate.model';

@Controller('rate')
@UseGuards(AuthGuard())
export class RateController {
  constructor(private rateService: RateService) {}

  @Post()
  getRate(@Body() getRateDto: GetRateDto): Rate {
    return this.rateService.getRate(getRateDto);
  }

  @Post('overstay')
  getOverStay(@Body() getRateDto: GetRateDto): Rate {
    return this.rateService.getRate(getRateDto);
  }
}
