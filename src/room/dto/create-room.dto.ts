import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
 @ApiProperty()
 number: number;

 @ApiProperty()
 type: string;

 @ApiProperty()
 capacity: number;

 @ApiProperty({ required: false })
  description?: string;

 @ApiProperty()
 price: number;
}

