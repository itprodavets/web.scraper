import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Base } from '../base.entity';
import { ImageItem } from './image.item.entity';
import { UrlItem } from './url.item.entity';

@ObjectType()
@Entity({ name: 'Items', schema: process.env.TYPEORM_DATABASE })
export class Item extends Base {
  @Field()
  @Column('varchar', { name: 'name', length: 100 })
  public name: string;

  @Field()
  @Column('varchar', { name: 'price', length: 100 })
  public price: string;

  @Field()
  @Column('varchar', { name: 'fullprice', length: 100 })
  public fullprice: string;

  @Field()
  @Column('varchar', { name: 'description', length: 100 })
  public description: string;

  @Field()
  @Column('varchar', { name: 'specification', length: 100 })
  public specification: string;

  @Field(() => [ImageItem], { nullable: true })
  @OneToMany(
    () => ImageItem,
    image => image.item,
  )
  @JoinColumn()
  public images: Promise<ImageItem[]>;

  @Field(() => UrlItem, { nullable: false })
  @OneToOne(() => UrlItem)
  @JoinColumn()
  public url: Promise<UrlItem>;
}
