import { ApiProperty } from '@nestjs/swagger';

export class CreateReservationDto {
  @ApiProperty()
  checkIn: Date;

  @ApiProperty()
  checkOut: Date;

  @ApiProperty()
  guests: number;

  @ApiProperty()
  totalPrice: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  roomId: number;
}
