import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(public service: CategoryService) {}
  @Post('/')
  @ApiOperation({ summary: 'Create category' })
  createOne(@Body() category: Category) {
    return this.service.create(category);
  }

  @Get('/')
  @ApiOperation({ summary: 'Get category' })
  getRestaurant(@Param('id') id: string) {
    return this.service.findOne(Object.assign(new Category(), id));
  }
  @Put('/')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully edited.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  editNews(@Body() category: Category) {
    return this.service.update(category);
  }

  @Delete('/:id')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully deleted.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  deleteNews(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
