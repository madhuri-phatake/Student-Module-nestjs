import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ExamEntity } from "../exammodels/exam.entity";
import { Exam } from "../exammodels/exam.interface";


@Entity('users')
export class UserPostEntity{

    @PrimaryGeneratedColumn()
    User_Id:number;

    @Column()
    User_Name:string;

    @Column({unique: true})
    Email:string;

    @Column()
    Roles: string;

    @Column()
    Gender: string;

    // @Column()
    // Exam_Center: string;

    // @Column()
    // Mobile_no:BigInteger;
    
    // @Column()
    // Address:string;

    @Column()
    State:string;

    @Column()
    Country:string;

    // @Column({nullable: true)
    // Center_Id:number;

    // @OneToMany((type) => ExamEntity, (exam) => exam.Center_Name)
    // Center: ExamEntity[]

    @ManyToMany(() => ExamEntity, (Center:ExamEntity) => Center.User)
    @JoinTable({
        name: 'User_exam_Table', // table name for the junction table of this relation
        joinColumn: {
          name: 'User',
          referencedColumnName: 'User_Id',
          foreignKeyConstraintName: 'User',
        },
        inverseJoinColumn: {
          name: 'Center',
          referencedColumnName: 'Center_Id',
          foreignKeyConstraintName: 'Center',
        },
      })
    Center: ExamEntity[]
}

