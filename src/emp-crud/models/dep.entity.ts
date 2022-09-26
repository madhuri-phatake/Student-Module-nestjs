import { Observable } from 'rxjs';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmpCrudEntity } from './post.entity';
@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  dep_id: number;

  @Column()
  depName: string;

  @Column()
  post: string;

  @ManyToMany(() => EmpCrudEntity, (Employee) => Employee.department)
  @JoinTable({name:'EmpDep'})
  Employee: Observable<EmpCrudEntity[]>;
}
