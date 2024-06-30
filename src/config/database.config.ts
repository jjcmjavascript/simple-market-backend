import { registerAs } from '@nestjs/config';

const dbConfigObject = Object.seal(
  Object.freeze({
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
  }),
);

export default registerAs('database', () => dbConfigObject);
