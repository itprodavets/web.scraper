import { ImageItemsResolver } from './image-items.resolver';
import { ItemsResolver } from './items.resolver';
import { UrlItemsResolver } from './url-items.resolver';

export const GraphQLResolvers = [
  ItemsResolver,
  UrlItemsResolver,
  ImageItemsResolver,
];
