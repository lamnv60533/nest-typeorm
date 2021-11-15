import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/category/category.entity';

export class RestaurantDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  closingTime: string;
  @ApiProperty()
  openingTime: string;
  @ApiProperty()
  district: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  isActive: boolean;
  @ApiProperty()
  isParking: boolean;
  @ApiProperty()
  isWifi: boolean;
  @ApiProperty()
  lat: number;
  @ApiProperty()
  long: number;
  @ApiProperty()
  phoneNumber: string;
  @ApiProperty()
  website: string;
  @ApiProperty()
  view: number;
  @ApiProperty()
  status: boolean;
  @ApiProperty()
  categories: number[];
}
