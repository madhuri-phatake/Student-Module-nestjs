import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { User } from './models/post.interface';
import { UserService } from './user.service';
import { Observable, of } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ValidateUser } from './models/user.validation';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import path, { extname } from 'path';
import { PatchValidateUser } from './models/patchvalidation';
import { ValidateUserdata } from './userdata/userdata.validation';
import { Userdata } from './userdata/userdata.interface';

// import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  imagepath: string;
  constructor(private userService: UserService) {}
  @Post()
  create(@Body() users: ValidateUser): Observable<User> {
    // users.User_img=this.imagepath;
    return this.userService.createUser(users);
  }

  @Post('userdata')
  createdata(@Body() validateUserdata: ValidateUserdata): Observable<Userdata> {
    return this.userService.createUserdata(validateUserdata);
  }
  @Get('userdata')
  findAllUserdata(): Observable<Userdata[]> {
    return this.userService.findAllUsersdata();
  }


  @Get()
  findAllUser(): Observable<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  getSpecificUser(@Param('id') id: number): Observable<User> {
    console.log(id);
    return this.userService.getSpecificUser(id);
  }

  @Put(':id')
  updatePut(
    @Param('id') id: number,
    @Body() users: ValidateUser,
  ): Observable<UpdateResult> {
    return this.userService.updateUser(id, users);
  }

  @Patch(':id')
  updatePatch(
    @Param('id') id: number,
    @Body() patchValidateUser: PatchValidateUser,
  ): Observable<UpdateResult> {
    return this.userService.updatePatchUser(id, patchValidateUser);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.userService.deleteUser(id);
  }

    // @Post('post-add')
    // @UseInterceptors(FileInterceptor('User_img',{dest:"./upload"}))
    // postAdd(@UploadedFile() profile:Express.Multer.File):Object{
    //   // console.log(profile)
    //   return{
    //       message: "file uploading"
    //   }
    // }

    //     @Post('image')
    // @UseInterceptors(
    //   FileInterceptor('User_img', {
    //     storage: diskStorage({
    //       destination: './uploaded_img',
    //       filename: (req, image, callback) => {
    //         const uniqueSuffix =
    //           Date.now() + '-' + Math.round(Math.random() * 1e9);
    //         const ext = extname(image.originalname);
    //         // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
    //         const filename = `${uniqueSuffix}${ext}`;
    //         callback(null, filename);
    //       },
    //     }),
    //   }),
    // )
    // handleupload(@UploadedFile() image: Express.Multer.File) {
    //   this.imagepath = image.path;
    //   console.log('image', image);
    //   console.log('path', image.path);
    //   return 'file upload API';
    // }
    // @Get('showimage/:image')
    // seeUploadedFile(@Param('image') image, @Res() res) {
    //   return res.sendFile(image, { root: './uploaded_img' });
    // }

}

