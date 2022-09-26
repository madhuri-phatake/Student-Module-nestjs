import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './entity/student.entity';
import { Student_subject } from './entity/Student_subject.entity';
import { subjects } from './entity/subject.entity';
//import { TypeORMError } from 'typeorm';
import { StudentManagmentController } from './student-managment.controller';
import { StudentManagmentService } from './student-managment.service';
import { StujectsService } from './subjects/stujects.service';
import { SubjectsController } from './subjects/subjects.controller';


@Module({
  imports: [TypeOrmModule.forFeature([student, subjects, Student_subject])],
  controllers: [StudentManagmentController, SubjectsController],
  providers: [StudentManagmentService, StujectsService],
})
export class StudentManagmentModule {}
