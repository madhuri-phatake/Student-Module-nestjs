import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { subjects } from './subject.entity';
@Entity('student')
export class student {
  //@PrimaryGeneratedColumn('uuid')
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  //@Field({ nullable: true })
  fname: string;

  @Column()
  lname: string;

  @Column()
  Stud_gender: string;

  @Column()
  Stud_email: string;

  @Column()
  Stud_address: string;

  // @Column()
  // Image: string;

  @ManyToMany(() => subjects, (subject) => subject.students, {
    cascade: true,
    eager: true,
  })
  @JoinTable({
    // name: 'Student_subject',
  })
  subjects: Promise<subjects[]>;
}
