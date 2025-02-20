import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
@Entity()
export class Adresse {
  @PrimaryGeneratedColumn('increment')
  adresse_id: number;

  @Column()
  numero: number;

  @Column()
  rue: string;

  @Column()
  ville: string;

  @Column()
  code_postal: number;

  @Column()
  pays: string;
}