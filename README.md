## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install

```

## Add environment:

```
TYPEORM_HOST =localhost
TYPEORM_USERNAME =root
TYPEORM_PASSWORD = R00t
TYPEORM_PORT = 3306
TYPEORM_LOGGING = true
DB_NAME = restaurant
```

## Create database:

```
CREATE DATABASE `restaurant` /_!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci _/ /_!80016 DEFAULT ENCRYPTION='N' _/;
```

## Run migration:

```bash
$ npm run migration:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Swagger API:

```
http://localhost:3000/docs/
```

## Create restaurant:

curl -X 'POST' \
 'http://localhost:3000/api/restaurant' \
 -H 'accept: _/_' \
 -H 'Content-Type: application/json' \
 -d '{
"name": "string",
"city": "string",
"closingTime": "string",
"openingTime": "string",
"district": "string",
"email": "string",
"isActive": true,
"isParking": true,
"isWifi": true,
"lat": 10,
"long": 10,
"phoneNumber": "string",
"website": "string",
"view": 0,
"status": true,
"categories": {
"name": "cafe",
"id": 1,
"isActive": true
}
}'

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
