import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { student } from './student.entity';

@Entity('subjects')
export class subjects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  // @Column()
  // info: String;

  @ManyToMany(() => student, (students) => students.subjects)
  
  students: Promise<student[]>;
}
