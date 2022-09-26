import { IsInt, IsString } from 'class-validator';
export class EmpDepCrud {
  @IsInt()
  emp_dep_id:number;
}