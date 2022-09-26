import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { EmpDepCrud } from '../models/dep_empinterface';
import { EmpCrudEntity } from '../models/post.entity';
import { EmpCrud } from '../models/postinterface';

@Injectable()
export class EmpCrudService {
  constructor(
    @InjectRepository(EmpCrudEntity)
    private readonly EmployeePostRepository: Repository<EmpCrudEntity>,

    @InjectRepository(EmpDepCrud)
    private readonly EmpdepRepository: Repository<EmpDepCrud>,
  ) {}
  // **************APi*****************
  create_emp_dep(EmpDepCrud: EmpDepCrud): Promise<EmpDepCrud> {
    return this.EmpdepRepository.save(EmpDepCrud);
  }
  findAll_emp_dep(): Promise<EmpDepCrud[]> {
    return this.EmpdepRepository.find();
  }

  getemployeeById(id: number): Observable<EmpCrud> {
    return from(this.EmployeePostRepository.findOneBy({ id }));
  }
  createPost(employeePost: EmpCrud): Observable<EmpCrud> {
    return from(this.EmployeePostRepository.save(employeePost));
  }
  findAllPosts(): Observable<EmpCrud[]> {
    return from(this.EmployeePostRepository.find());
  }
  updatePutPost(id: number, employeePost: EmpCrud): Observable<UpdateResult> {
    return from(this.EmployeePostRepository.update(id, employeePost));
  }
  updatePatchPost(id: number, employeePost: EmpCrud): Observable<UpdateResult> {
    return from(this.EmployeePostRepository.update(id, employeePost));
  }
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.EmployeePostRepository.delete(id));
  }
}
