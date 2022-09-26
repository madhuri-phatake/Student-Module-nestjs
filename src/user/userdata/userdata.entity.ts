import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('User_exam_Table')
export class UserdataEntity{

    @PrimaryGeneratedColumn()
    Id:number;

    // Center: number;
    // User: number;

    @Column()
    Center: number;

    @Column()
    User: number;

}

