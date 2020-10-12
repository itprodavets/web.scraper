import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';
import { DatabaseConfig } from './database.config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const database = this.configService.get<DatabaseConfig>('database');
    return {
      type: 'mysql',
      host: database.host,
      port: database.port,
      username: database.username,
      password: database.password,
      database: database.db,
      entities: [join(__dirname, '..', '**', 'entities', '*.entity.{ts,js}')],
      synchronize: true,
      logging: true,
      migrations: [join(__dirname, '..', '**', 'migrations', '*.{ts,js}')],
      migrationsTableName: 'migrations',
      migrationsRun: true,
      cli: {
        entitiesDir: 'src/db/entities',
        migrationsDir: 'src/db/migrations',
        subscribersDir: 'src/db/subscribers',
      },
    };
  }
}
