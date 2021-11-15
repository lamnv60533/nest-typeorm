import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Restaurant } from './restaurant/restaurant.entity';
import { RestaurantModule } from './restaurant/restaurant.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RestaurantModule,
    CategoryModule,
    // UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
