import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GqlConfigService } from 'src/config/gql.config.service';
import { TypeOrmConfigService } from 'src/config/typeorm.config.service';
import { RepositoryModule } from 'src/repository/repository.module';

import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';

import { GraphQLResolvers } from './resolvers';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
      inject: [ConfigService],
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useClass: GqlConfigService,
      inject: [ConfigService],
    }),
    RepositoryModule,
  ],
  controllers: [],
  providers: [
    //...CommandHandlers,
    //...EventHandlers,
    ...QueryHandlers,
    ...GraphQLResolvers,
  ],
})
export class ItemModule {}
