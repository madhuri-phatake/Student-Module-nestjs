import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { ExamEntity } from '../exammodels/exam.entity';
import { Exam } from '../exammodels/exam.interface';


@Injectable()
export class ExamService {
    constructor(
        @InjectRepository(ExamEntity)
        private readonly examPostRepository:Repository<ExamEntity>
    ){}

    // createUser(exams: ValidateExam): Observable<Exam>{
    //     return from(this.examPostRepository.save(exams));
    // }

    findAllCenters(): Observable<Exam[]>{
        return from(this.examPostRepository.find());
    }
}
