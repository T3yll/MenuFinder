import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';


import { Restaurant } from './restaurant.module';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn('increment')
  menu_id: number;

  @ManyToOne(() => Restaurant)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: Restaurant;
}
