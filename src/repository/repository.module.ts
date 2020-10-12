import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageItem, Item, UrlItem } from 'src/db/entities';
import { RepositoryService } from './repository.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([ImageItem, Item, UrlItem])],
  providers: [RepositoryService],
  exports: [RepositoryService],
})
export class RepositoryModule {}
