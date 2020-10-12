import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ItemModule } from './item/item.module';
import AppConfig from './config/app.config';
import DatabaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [AppConfig, DatabaseConfig],
    }),
    ItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
