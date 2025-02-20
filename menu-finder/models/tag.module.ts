import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

import { TagRestaurant } from './tag-restaurant.module';


@Entity()
export class Tag {
  @PrimaryGeneratedColumn('increment')
  tag_id: number;

  @Column()
  name: string;

  @OneToMany(() => TagRestaurant, (tagRestaurant) => tagRestaurant.tag)
  tagRestaurants: TagRestaurant[];
}