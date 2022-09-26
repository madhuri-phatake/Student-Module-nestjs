import { ApiProperty } from "@nestjs/swagger";
import {
      IsNotEmpty, IsOptional, IsString, }
from "class-validator";
export class ExamPatchValidateUser{
    // @IsNotEmpty() @IsInt() Center_Id: number;
    @IsNotEmpty() @IsString() @IsOptional() @ApiProperty ({required: false}) Exam_Center: string;
}