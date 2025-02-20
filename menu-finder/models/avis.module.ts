import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

import { Restaurant } from './restaurant.module';
import { User } from './user.module';


@Entity()
export class Avis {
  @PrimaryGeneratedColumn('increment')
  avis_id: number;

  @ManyToOne(() => Restaurant)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: Restaurant;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  text: string;

  @Column()
  added_at: Date;

  @Column()
  updated_at: Date;
}