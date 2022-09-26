import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Student_subject')
export class Student_subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentMId: number;

  @Column()
  subjectsId: number;
}
