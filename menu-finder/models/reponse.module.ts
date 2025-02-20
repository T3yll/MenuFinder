import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.module';
import { Avis } from './avis.module';


@Entity()
export class Reponse {
  @PrimaryGeneratedColumn('increment')
  reponse_id: number;

  @ManyToOne(() => Avis)
  @JoinColumn({ name: 'avis_id' })
  avis: Avis;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  texte: string;

  @Column()
  added_at: Date;

  @Column()
  updated_at: Date;
}