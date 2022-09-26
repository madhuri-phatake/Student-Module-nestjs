import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  id: number;
  // @IsString()
  // @IsNotEmpty()
  fname: string;

  // @IsString()
  // @IsNotEmpty()
  lname: string;

  // @IsString()
  // @IsNotEmpty()
  Stud_gender: string;

  // @IsEmail()
  // @IsNotEmpty()
  Stud_email: string;

  // @IsString()
  // @IsNotEmpty()
  Stud_address: string;

  // Image: string;
  
  // static Image: string;
}
