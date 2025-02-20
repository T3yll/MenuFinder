import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

import { Favori } from './favori.module';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column({ type: 'text' })
  nom: string;

  @Column({ type: 'text' })
  prenom: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'boolean' })
  bAdmin: boolean;

  /* @ManyToOne(() => File, (file) => file.users, { eager: true })
  image: File; */

  @OneToMany(() => Favori, (favori) => favori.user)
  favoris: Favori[];
}