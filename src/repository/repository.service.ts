import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageItem, Item, UrlItem } from 'src/db/entities';

@Injectable()
export class RepositoryService {
  public constructor(
    @InjectRepository(Item) public readonly itemRepository: Repository<Item>,
    @InjectRepository(UrlItem)
    public readonly urlItemRepository: Repository<UrlItem>,
    @InjectRepository(ImageItem)
    public readonly imageItemRepository: Repository<ImageItem>,
  ) {}
}
