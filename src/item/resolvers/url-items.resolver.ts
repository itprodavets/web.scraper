import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import { Query, Resolver } from '@nestjs/graphql';
import { UrlItem } from 'src/db/entities';
import { GetUrlItemListQuery } from '../queries/impl';

@Resolver()
export class UrlItemsResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly eventBus: EventBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => [UrlItem], { nullable: false })
  public async urlItems(): Promise<UrlItem[]> {
    return await this.queryBus.execute(new GetUrlItemListQuery());
  }
}
