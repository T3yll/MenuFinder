import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn,PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { Tag } from './tag.module';
import { Restaurant } from './restaurant.module';

@Entity()
export class TagRestaurant {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.tagRestaurants, { onDelete: 'CASCADE' })
  restaurant: Restaurant;

  @ManyToOne(() => Tag, (tag) => tag.tagRestaurants, { onDelete: 'CASCADE' })
  tag: Tag;
}