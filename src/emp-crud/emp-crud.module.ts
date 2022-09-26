import { Module } from '@nestjs/common';
import { EmpCrudService } from './services/emp-crud.service';

import { EmpCrudEntity } from './models/post.entity';

import { EmpCrudController } from './controller/emp-crud.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './models/dep.entity';
import { DepartmentService } from './services/dep-crud.service';
import { DepartmentController } from './controller/dep-crud.controller';
import { EmpCrud } from './models/postinterface';
import { EmpDepCrud } from './models/dep_empinterface';

@Module({
  imports: [TypeOrmModule.forFeature([EmpCrudEntity, Department, EmpDepCrud])],
  providers: [EmpCrudService, DepartmentService],
  controllers: [EmpCrudController, DepartmentController],
})
export class EmpCrudModule {}
