import { AggregateRoot } from '@nestjs/cqrs';
import { ImageItemModel } from './image.item.model';

export class ItemModel extends AggregateRoot {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly price: string,
    private readonly fullprice: string,
    private readonly description: string,
    private readonly specification: string,
    private readonly images: Array<ImageItemModel>,
  ) {
    super();
  }
}
