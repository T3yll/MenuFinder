import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
@Entity()
export class CategoriePlat {
  @PrimaryGeneratedColumn('increment')
  categorie_plat_id: number;

  @Column()
  nom: string;
}