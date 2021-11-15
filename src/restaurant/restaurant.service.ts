import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Geometry, Point } from 'geojson';
import { getRepository, getManager, Repository } from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { CategoryService } from 'src/category/category.service';
const SRID = 4326;

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}
  async findAll(): Promise<Restaurant[]> {
    return await this.restaurantRepository.find();
  }
  async findByCategory(categoryId: number): Promise<Restaurant[]> {
    const questions = await getRepository(Restaurant)
      .createQueryBuilder()
      .innerJoinAndSelect(
        'restaurant_categories',
        'category',
        'category = restaurant',
      )
      .where('category = :categoryId', { categoryId })
      .getMany();
    return questions;
  }
  async findOne(restaurant: Restaurant): Promise<Restaurant> {
    return await this.restaurantRepository.findOne(restaurant);
  }

  async update(restaurant: Restaurant) {
    const pointObject: Point = {
      type: 'Point',
      coordinates: [restaurant.long, restaurant.lat],
    };
    let restaurantUpdate = await this.restaurantRepository.findOne(
      restaurant.id,
    );
    restaurantUpdate = {
      ...restaurantUpdate,
      ...restaurant,
      //   location: pointObject,
    };
    return await this.restaurantRepository.save(restaurantUpdate);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.restaurantRepository.delete(id);
  }
  async createRestaurant(restaurant: Restaurant) {
    // const location: Geometry = {
    //   type: 'Point',
    //   coordinates: [-74.534, 39.123],
    // };
    // const lat = -74.534,
    //   long = -39.123;
    // you should validate the geojson here
    // https://www.npmjs.com/package/geojson-validation

    // if(!validGeoJson(location))throw new Error('invalid GeoJSON')
    return getRepository(Restaurant)
      .createQueryBuilder()
      .insert()
      .into(Restaurant)
      .values({
        ...restaurant,
        location: () =>
          `ST_GeomFromText('POINT(${restaurant.lat} ${restaurant.long})', ${SRID})`,
      })
      .execute();
    // return getRepository(Restaurant).save(restaurant);
  }

  selectRestaurantIndistance = async (long, lat, distance) => {
    return await getManager().query(
      `SELECT id, name,
        ST_AsText('location') AS'pos_wkt',
        ST_Distance_Sphere('location', ST_GeomFromText( 'POINT(${lat} ${long})', 0 )) AS 'distance'
        FROM
            restaurant.restaurant
        WHERE ST_Distance_Sphere('location', ST_GeomFromText( 'POINT(${lat} ${long})', 0 )) <= (${distance}*1000);`,
    );
  };
}
