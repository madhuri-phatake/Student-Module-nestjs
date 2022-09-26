import { ApiProperty } from "@nestjs/swagger";
import {
    IsEmail,  IsNotEmpty, IsOptional, IsString, }
from "class-validator";
export class PatchValidateUser{
    // @IsNotEmpty() @IsInt() User_Id: number;
    @IsNotEmpty() @IsString() @IsOptional() @ApiProperty ({required: false}) User_Name: string;
    @IsNotEmpty() @IsEmail() @IsOptional() @ApiProperty ({required: false}) Email: string;
    @IsNotEmpty() @IsString() @IsOptional() @ApiProperty ({required: false}) Roles: string;
    @IsNotEmpty() @IsString()@IsOptional() @ApiProperty ({required: false})  Gender: string;
    @IsNotEmpty() @IsString() @IsOptional() @ApiProperty ({required: false}) Exam_Center: string;
    // @IsNotEmpty() @IsInt() Mobile_no: number;
    // @IsNotEmpty() @IsString() Center_Id: string;
    @IsNotEmpty() @IsString() @IsOptional() @ApiProperty ({required: false}) State: string;
    @IsNotEmpty() @IsString() @IsOptional() @ApiProperty ({required: false}) Country: string;
    // @IsNotEmpty() @IsOptional() @ApiProperty ({required: false}) Center_Id: number;
    // @IsNotEmpty() @IsString() User_img: string;


}