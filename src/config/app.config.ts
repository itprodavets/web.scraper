import { registerAs } from '@nestjs/config';

export interface AppConfig {
  host: string;
  port: number;
}

export default registerAs(
  'app',
  () =>
    ({
      host: process.env.HOST,
      port: parseInt(process.env.PORT, 10) || 3000,
    } as AppConfig),
);
