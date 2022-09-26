import { Observable } from 'rxjs';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from './dep.entity';
@Entity('emp')
export class EmpCrudEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  empFname: string;
  @Column()
  empLname: string;

  @Column({ unique: true })
  email: string;
  // @Column()
  // emp_gender: string;
  @Column()
  emp_address: string;
  // @Column()
  // img: string;

  @ManyToMany(() => Department, (department) => department.Employee)
  @JoinTable({name:'EmpDep'})
  department: Observable<Department[]>;
}
