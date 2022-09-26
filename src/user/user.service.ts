import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PatchValidateUser } from './models/patchvalidation';
import { UserPostEntity } from './models/post.entity';
import { User } from './models/post.interface';
import { ValidateUser } from './models/user.validation';
import { UserdataEntity } from './userdata/userdata.entity';
import { Userdata } from './userdata/userdata.interface';
import { ValidateUserdata } from './userdata/userdata.validation';
// import { UserdataEntity } from './userdata/userdata.entity';
// import { Userdata } from './userdata/userdata.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserPostEntity)
        private readonly userPostRepository:Repository<UserPostEntity>, 
        @InjectRepository(UserdataEntity)
        private readonly userdataRepository:Repository<UserdataEntity>
    ){}

    createUser(users: ValidateUser): Observable<User>{
        return from(this.userPostRepository.save(users));
    }

    //Third table
    createUserdata(validateUserdata: ValidateUserdata): Observable<UserdataEntity>{
        return from(this.userdataRepository.save(validateUserdata));
    }

    findAllUsersdata(): Observable<Userdata[]>{
        return from(this.userdataRepository.find());
    }
//----------------------------------------------------------

    findAllUsers(): Observable<User[]>{
        return from(this.userPostRepository.find());
    }

    getSpecificUser(id:number): Observable<User>{
        const User_Id = id;
        return from(this.userPostRepository.findOneBy({User_Id}));
    }

    updateUser(id:number, users:ValidateUser): Observable<UpdateResult>{
        return from(this.userPostRepository.update(id, users));
    }
   
    updatePatchUser(id: number,patchValidateUser:PatchValidateUser): Observable<UpdateResult> {
        return from(this.userPostRepository.update(id, patchValidateUser));
      }

    deleteUser(id: number): Observable<DeleteResult> {
        return from(this.userPostRepository.delete(id));
      }
}
