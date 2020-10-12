import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { yellowBright } from 'cli-color';
import { ImageItem } from 'src/db/entities';
import { RepositoryService } from 'src/repository/repository.service';
import { GetImageItemListQuery } from '../impl';

@QueryHandler(GetImageItemListQuery)
export class GetImageItemListHandler
  implements IQueryHandler<GetImageItemListQuery> {
  constructor(private readonly repository: RepositoryService) {}
  public async execute(
    query: GetImageItemListQuery,
  ): Promise<Array<ImageItem>> {
    console.log(yellowBright('Async GetImageItemListQuery...'));
    return await this.repository.imageItemRepository.find();
  }
}
