import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { EmpCrud } from '../models/postinterface';
import { EmpCrudService } from '../services/emp-crud.service';
@Controller('employee')
export class EmpCrudController {
  constructor(private employeeService: EmpCrudService) {}
  @Get(':id')
  getemployeeById(@Param('id') id: number): Observable<EmpCrud> {
    return this.employeeService.getemployeeById(id);
  }

  @Post() create(@Body() employeePost: EmpCrud): Observable<EmpCrud> {
    return this.employeeService.createPost(employeePost);
  }
  
  @Get() findAll(): Observable<EmpCrud[]> {
    return this.employeeService.findAllPosts();
  }
  @Put(':id') update(
    @Param('id') id: number,
    @Body() employeeInterface: EmpCrud,
  ): Observable<UpdateResult> {
    return this.employeeService.updatePutPost(id, employeeInterface);
  }
  @Patch(':id') updatePatch(
    @Param('id') id: number,
    @Body() employeePost: EmpCrud,
  ): Observable<UpdateResult> {
    return this.employeeService.updatePatchPost(id, employeePost);
  }

  @Delete(':id') delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.employeeService.deletePost(id);
  }
}
