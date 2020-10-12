import { registerAs } from '@nestjs/config';

export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  db: string;
}

export default registerAs(
  'database',
  () =>
    ({
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.TYPEORM_HOST, 10) || 3306,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      db: process.env.TYPEORM_DATABASE,
    } as DatabaseConfig),
);
