import { AggregateRoot } from '@nestjs/cqrs';

export class ImageItemModel extends AggregateRoot {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly path: string,
  ) {
    super();
  }
}
