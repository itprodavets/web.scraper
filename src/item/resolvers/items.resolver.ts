import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import { Query, Resolver } from '@nestjs/graphql';
import { Item } from 'src/db/entities';
import { GetItemListQuery } from '../queries/impl';

@Resolver()
export class ItemsResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly eventBus: EventBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => [Item], { nullable: false })
  public async items(): Promise<Item[]> {
    return await this.queryBus.execute(new GetItemListQuery());
  }
}
