import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamEntity } from '../exammodels/exam.entity';
import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';

@Module({
    imports:[TypeOrmModule.forFeature([ExamEntity])],
    controllers:[ExamController],
    providers:[ExamService]
})
export class ExamModule {}
