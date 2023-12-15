import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationStatus } from './reservation.enum';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationStatusDto } from './dto/update-reservation.dto';
import { Reservation } from './reservation.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import {
  ApiOperation,
  ApiBody,
  ApiTags,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';

@Controller('reservations')
@ApiTags('Reservation')
@UseGuards(AuthGuard())
export class ReservationController {
  constructor(private reservationService: ReservationService) {}

  @ApiOperation({
    summary: 'Get Reservations',
    description: 'Get al Reservations',
  })
  @Get()
  @ApiBearerAuth()
  getAllReservation(): Promise<Reservation[]> {
    return this.reservationService.getAllReservation();
  }

  @ApiOperation({
    summary: 'Get user by ID',
    description: 'Retrieve user details by ID',
  })
  @ApiParam({ name: 'id', description: 'User ID' })
  @Get('/:id')
  @ApiBearerAuth()
  getReservationById(@Param('id') id: number): Promise<Reservation> {
    return this.reservationService.getReservationById(id);
  }

  @ApiOperation({
    summary: 'Create a Reservation',
    description: 'Create a Reservation',
  })
  @ApiBody({ description: 'Get rate', type: CreateReservationDto })
  @Post()
  @ApiBearerAuth()
  createReservation(
    @Body() createReservationDto: CreateReservationDto,
    @GetUser() user: User,
  ): Promise<Reservation> {
    return this.reservationService.createReservation(
      createReservationDto,
      user,
    );
  }

  @ApiOperation({
    summary: 'Delete reservation by ID',
    description: 'Delete reservation details by ID',
  })
  @ApiParam({ name: 'id', description: 'User ID' })
  @Delete('/:id')
  @ApiBearerAuth()
  deleteReservation(@Param('id') id: number): Promise<void> {
    return this.reservationService.deleteReservation(id);
  }

  @ApiOperation({
    summary: 'Update reservation by ID',
    description: 'Update reservation details by ID',
  })
  @ApiParam({ name: 'id', description: 'User ID' })
  @Patch('/:id/status')
  @ApiBearerAuth()
  updateReservationStatus(
    @Param('id') id: number,
    @Body() updateReservationStatusDto: UpdateReservationStatusDto,
  ): Promise<Reservation> {
    const { status } = updateReservationStatusDto;
    return this.reservationService.updateReservationStatus(id, status);
  }
}
