import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { yellowBright } from 'cli-color';
import { UrlItem } from 'src/db/entities';
import { RepositoryService } from 'src/repository/repository.service';
import { GetUrlItemListQuery } from '../impl';

@QueryHandler(GetUrlItemListQuery)
export class GetUrlItemListHandler
  implements IQueryHandler<GetUrlItemListQuery> {
  constructor(private readonly repository: RepositoryService) {}
  public async execute(query: GetUrlItemListQuery): Promise<Array<UrlItem>> {
    console.log(yellowBright('Async GetUrlItemListQuery...'));
    return await this.repository.urlItemRepository.find();
  }
}
