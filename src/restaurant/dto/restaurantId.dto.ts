import { ApiProperty } from '@nestjs/swagger';

export class RestaurantIdDto {
  @ApiProperty()
  id: string;
}
