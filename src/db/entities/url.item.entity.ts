import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne } from 'typeorm';
import { Base } from '../base.entity';
import { Item } from './item.entity';

@ObjectType()
@Entity({ name: 'urlItems', schema: process.env.TYPEORM_DATABASE })
export class UrlItem extends Base {
  @Field()
  @Column('varchar', { name: 'url', length: 100 })
  public url: string;

  @Field()
  @Column('varchar', { name: 'category', length: 100 })
  public category: string;

  @Field(() => Item, { nullable: true })
  @OneToOne(
    () => Item,
    item => item.url,
  )
  public item?: Promise<Item>;
}
