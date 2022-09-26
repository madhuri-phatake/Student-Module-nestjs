import { Body, Controller, Post, Request, Req, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Department } from '../models/dep.entity';
import { DepCrud } from '../models/depinterface';
import { DepartmentService } from '../services/dep-crud.service';
@Controller('/department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}


  @Post()
  createDepartment(@Body() department: Department) {
    return this.departmentService.createDeparment(department);
  }

  @Get()
  findAllDepartment() {
    return this.departmentService.findAllDepartment();
  }
}
