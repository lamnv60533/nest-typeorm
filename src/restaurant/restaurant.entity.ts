import { Category } from 'src/category/category.entity';
import { Geometry, Point } from 'geojson';
import {
  Column,
  Entity,
  Index,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  website: string;

  @Column()
  view: number;

  @Column()
  isActive: boolean;

  @Column({ type: 'float' })
  lat: number;

  @Column({ type: 'float' })
  long: number;

  // @Column({ type: 'point', srid: 4326 })
  // @Column({
  //   type: 'geometry',
  //   spatialFeatureType: 'Point',
  //   srid: 4326, // WGS84 reference system
  // })
  // @Index({ spatial: true })
  // location: string;

  // @Column({
  //   type: 'geometry',
  //   spatialFeatureType: 'Point',
  //   srid: 4326, // WGS84 reference system
  //   transformer: new GeometryTransformer(),
  // })
  // location1?: Geometry;
  @Index({ spatial: true })
  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: false,
  })
  location: Point;

  @Column()
  openingTime: string;
  @Column()
  closingTime: string;

  @Column()
  status: boolean; //OPEN/CLOSE

  @Column()
  isParking: boolean;

  @Column()
  isWifi: boolean;

  @JoinTable({
    name: 'restaurant_categories',
    joinColumn: {
      name: 'restaurant',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'category',
      referencedColumnName: 'id',
    },
  })
  @ManyToMany(() => Category, { cascade: true })
  categories: Category[];

  @Column({ name: 'created_at', default: () => `now()`, nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
  updateTime: Date;
}
