import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm';

import { Restaurant } from './restaurant.module';
import { User } from './user.module';

@Entity()
export class Favori {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => User, (user) => user.favoris, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.favoris, { onDelete: 'CASCADE' })
  restaurant: Restaurant;
}
  

