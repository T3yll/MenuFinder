import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.module';
import { Adresse } from './adresse.module';
import { File } from './file.module';
import { Favori } from './favori.module';
import { TagRestaurant } from './tag-restaurant.module';



@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn('increment')
  restaurant_id: number;

  @Column({ type: 'text' })
  nom: string;

  @Column({ type: 'text' })
  type: string;

  @OneToMany(() => TagRestaurant, (tagRestaurant) => tagRestaurant.restaurant)
  tagRestaurants: TagRestaurant[];

  @OneToMany(() => Favori, (favori) => favori.restaurant)
  favoris: Favori[];
}
