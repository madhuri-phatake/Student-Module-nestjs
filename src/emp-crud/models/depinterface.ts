import { IsInt, IsString } from 'class-validator';
export class DepCrud {
  @IsInt()
  dep_id: number;

  @IsString()
  depName: string;

  @IsString()
  post: string;
}
