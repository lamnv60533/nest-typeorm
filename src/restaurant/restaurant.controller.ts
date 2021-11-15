import { Restaurant } from './restaurant.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RestaurantDto } from './dto/restaurant.dto';
import { RestaurantIdDto } from './dto/restaurantId.dto';

@ApiTags('restaurant')
@Controller('restaurant')
export class RestaurantController {
  constructor(public service: RestaurantService) {}
  @Get('indistance')
  inDistance() {
    return this.service.selectRestaurantIndistance(-74.534, -40.123, 1000);
  }
  @Post('/')
  @ApiOperation({ summary: 'Create restaurant' })
  createOne(@Body() resDto: RestaurantDto) {
    return this.service.createRestaurant(
      Object.assign(new Restaurant(), resDto),
    );
  }

  @Get('/')
  @ApiOperation({ summary: 'Get Restaurant' })
  getRestaurant(@Param('id') id: RestaurantIdDto) {
    return this.service.findOne(Object.assign(new Restaurant(), id));
  }
  @Get('/category/:CategoryId')
  @ApiOperation({ summary: 'Get Restaurant' })
  getRestaurantByCategory(@Param('CategoryId') id: number) {
    return this.service.findByCategory(id);
  }
  @Put('/')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully edited.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  editNews(@Body() resDto: RestaurantDto) {
    return this.service.update(Object.assign(new Restaurant(), resDto));
  }

  @Delete('/:id')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully deleted.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  deleteNews(@Param('id') id: RestaurantIdDto) {
    return this.service.delete(id);
  }
}
