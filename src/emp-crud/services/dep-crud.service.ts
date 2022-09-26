import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Department } from '../models/dep.entity';
import { DepCrud } from '../models/depinterface';
// import { EmpDepCrud } from '../models/dep_empinterface';
// import { EmpCrudEntity } from '../models/post.entity';
// import { EmpCrudService } from './emp-crud.service';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepo: Repository<Department>, // private departmentService: EmpCrudService, // @InjectRepository(EmpDepCrud) // private readonly EmpDepRepo: Repository<EmpDepCrud>, // private departmentService: EmpCrudService,
  ) {}
  createDeparment(department: Department): Observable<Department> {
    return from(this.departmentRepo.save(department));
  }
  findAllDepartment(): Observable<DepCrud[]> {
    // const dep_id = id;
    return from(this.departmentRepo.find());
  }
}
