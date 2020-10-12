import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import { Query, Resolver } from '@nestjs/graphql';
import { ImageItem } from 'src/db/entities';
import { GetImageItemListQuery } from '../queries/impl';

@Resolver()
export class ImageItemsResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly eventBus: EventBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => [ImageItem], { nullable: false })
  public async imageItems(): Promise<ImageItem[]> {
    return await this.queryBus.execute(new GetImageItemListQuery());
  }
}
