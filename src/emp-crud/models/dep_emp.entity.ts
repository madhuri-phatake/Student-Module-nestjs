import { Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class EmpCrud {
  @PrimaryGeneratedColumn()
  id: number;
}
