import {
     IsNotEmpty, IsString, }
from "class-validator";
export class ValidateExam{
    // @IsNotEmpty() @IsInt() User_Id: number;
    @IsNotEmpty() @IsString() Exam_Center: string;
   
}