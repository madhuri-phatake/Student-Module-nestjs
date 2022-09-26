import {
     IsNotEmpty }
from "class-validator";
export class ValidateUserdata{
    // @IsNotEmpty()  Id:number;
    @IsNotEmpty()  Center: number;
    @IsNotEmpty()  User: number;
        
}