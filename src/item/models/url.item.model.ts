import { AggregateRoot } from '@nestjs/cqrs';

export class UrlItemModel extends AggregateRoot {
  constructor(
    private readonly id: string,
    private readonly url: string,
    private readonly category: string,
  ) {
    super();
  }
}
