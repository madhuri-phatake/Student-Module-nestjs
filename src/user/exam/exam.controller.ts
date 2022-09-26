import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Exam } from '../exammodels/exam.interface';
import { ExamService } from './exam.service';

@Controller('exam')
export class ExamController {
  constructor(private examService: ExamService) {}

  @Get()
  findAllCenter(): Observable<Exam[]> {
    return this.examService.findAllCenters();
  }
}
