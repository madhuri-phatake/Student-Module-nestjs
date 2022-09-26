import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamEntity } from './exammodels/exam.entity';
import { UserPostEntity } from './models/post.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserdataEntity } from './userdata/userdata.entity';

@Module({
    imports:[TypeOrmModule.forFeature([UserPostEntity,UserdataEntity])],
    controllers:[UserController],
    providers:[UserService]
})
export class UserModule {}
