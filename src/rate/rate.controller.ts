import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { RateService } from './rate.service';
import { GetRateDto } from './dto/rate.dto';
import { Rate } from './rate.model';
import { ApiOperation, ApiBody, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('rate')
@ApiTags('Rate')
@UseGuards(AuthGuard())
export class RateController {
  constructor(private rateService: RateService) {}

  @ApiOperation({
    summary: 'Get rate',
    description: 'Get the rate for staying for reserving an accommodation',
  })
  @ApiBody({ description: 'Get rate', type: GetRateDto })
  @Post()
  @ApiBearerAuth()
  getRate(@Body() getRateDto: GetRateDto): Rate {
    return this.rateService.getRate(getRateDto);
  }

  @ApiOperation({
    summary: 'Get Over Stay rate',
    description:
      'Check if a customer has over stayed and considering if the customer has stayed during the weekend or weekday',
  })
  @ApiBody({ description: 'Get Over Stay rate', type: GetRateDto })
  @Post('overstay')
  @ApiBearerAuth()
  getOverStay(@Body() getRateDto: GetRateDto): Rate {
    return this.rateService.getRate(getRateDto);
  }
}
