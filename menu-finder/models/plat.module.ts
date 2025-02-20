import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Menu } from './menu.module';
import { CategoriePlat } from './categorie-plat.module';
import { File } from './file.module';

@Entity()
export class Plat {
  @PrimaryGeneratedColumn('increment')
  plat_id: number;

  @ManyToOne(() => Menu)
  @JoinColumn({ name: 'menu_id' })
  menu: Menu;

  @Column()
  nom: string;

  @Column()
  prix: number;

  @ManyToOne(() => CategoriePlat)
  @JoinColumn({ name: 'categorie_plat_id' })
  categorie_plat: CategoriePlat;

  @Column()
  ingredients: string;

  /* @ManyToOne(() => File)
  @JoinColumn({ name: 'image_file_id' })
  image: File; */
}