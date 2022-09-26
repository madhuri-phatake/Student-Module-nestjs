import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';
export class ValidateUser {
  // @IsNotEmpty() @IsInt() User_Id: number;
  @IsNotEmpty() @IsString() User_Name: string;
  @IsNotEmpty() @IsEmail() Email: string;
  @IsNotEmpty() @IsString() Roles: string;
  @IsNotEmpty() @IsString() Gender: string;
  // @IsNotEmpty() @IsString() Exam_Center: string;
  // @IsNotEmpty() @IsInt() Mobile_no: number;
  // @IsNotEmpty() @IsString() Address: string;
  @IsNotEmpty() @IsString() State: string;
  @IsNotEmpty() @IsString() Country: string;
//   @IsNotEmpty() @IsString() Center_Id: number;
  // @IsNotEmpty() @IsString() User_img: string;
}
