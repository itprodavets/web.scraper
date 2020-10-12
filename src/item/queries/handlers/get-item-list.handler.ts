import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { yellowBright } from 'cli-color';
import { Item } from 'src/db/entities';
import { RepositoryService } from 'src/repository/repository.service';
import { GetItemListQuery } from '../impl';

@QueryHandler(GetItemListQuery)
export class GetItemListHandler implements IQueryHandler<GetItemListQuery> {
  constructor(private readonly repository: RepositoryService) {}
  public async execute(query: GetItemListQuery): Promise<Array<Item>> {
    console.log(yellowBright('Async GetItemListQuery...'));
    return await this.repository.itemRepository.find();
  }
}
