import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserdataEntity } from './userdata.entity';



@Module({
    imports:[TypeOrmModule.forFeature([UserdataEntity])],
})
export class UserdataModule {}
