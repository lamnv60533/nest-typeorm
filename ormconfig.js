module.exports = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/**/*{.ts,.js}'],
  synchronize: true,
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/migrations',
  },
  logging: process.env.TYPEORM_LOGGING,
  legacySpatialSupport: false,
};
