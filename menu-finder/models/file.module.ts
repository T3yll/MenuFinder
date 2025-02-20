import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
@Entity()
export class File {
  @PrimaryGeneratedColumn('increment')
  file_id: number;

  @Column()
  path: string;

  @Column()
  name: string;

  @Column()
  type: string;
}