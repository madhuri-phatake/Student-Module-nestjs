import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentService } from './services/dep-crud.service';
import { DepartmentController } from './controller/dep-crud.controller';
import { Department } from './models/dep.entity';
import { DepCrud } from './models/depinterface';
import { EmpCrudEntity } from './models/post.entity';
// import { departmentRepo } from './dep.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Department,EmpCrudEntity])],
  providers: [DepartmentService],
  controllers: [DepartmentController],
})
export class DepartmentModule {}
