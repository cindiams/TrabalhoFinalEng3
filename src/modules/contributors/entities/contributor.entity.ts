import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contributor {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string;

  @Column()
  cpf: string;

}
