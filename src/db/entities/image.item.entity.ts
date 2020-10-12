import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../base.entity';
import { Item } from './item.entity';

@ObjectType()
@Entity({ name: 'imageItems', schema: process.env.TYPEORM_DATABASE })
export class ImageItem extends Base {
  @Field()
  @Column('varchar', { name: 'name', length: 100 })
  public name: string;

  @Field()
  @Column('varchar', { name: 'path', length: 100 })
  public path: string;

  @Field(() => Item, { nullable: false })
  @OneToMany(
    () => Item,
    item => item.images,
  )
  public item: Promise<Item>;
}
