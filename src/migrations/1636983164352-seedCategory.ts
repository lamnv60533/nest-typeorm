import { MigrationInterface, QueryRunner } from 'typeorm';

export class seedCategory1636983164352 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const query =
      "INSERT INTO `category` VALUES (1,'cafe',1,1,'2021-11-15 13:48:39','2021-11-15 13:48:39'),(2,'Fast Food.',1,2,'2021-11-15 13:48:39','2021-11-15 13:48:39'),(3,'Casual Dining',1,3,'2021-11-15 13:48:39','2021-11-15 13:48:39');";
    await queryRunner.query(query);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const query = 'Truncate TABLE `category`';
    await queryRunner.query(query);
  }
}
