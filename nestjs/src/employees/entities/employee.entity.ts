import {
    Column,
    Entity,
    JoinColumn, JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    RelationId
} from "typeorm";
import {Department} from "../../departments/department.entity";
import { Phone } from "../../phones/entities/phone.entity";
import {Meeting} from "../../meetings/entities/meeting.entity";

@Entity('employee')
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 10,
        nullable: false,
    })
    EmployeeNum: string;

    @Column({
        type: 'varchar',
        length: 40,
        nullable: false,
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 40,
        nullable: false,
    })
    email: string;


    @Column({
        type: 'decimal',
        nullable: false,
    })
    salary: string;

    @ManyToMany(() => Meeting, (meeting) => meeting.attendees)
    @JoinTable({
        name: 'attendees',
        joinColumn: {name: 'employee_id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'meeting_id', referencedColumnName: 'id'},
    })
    meetings: Meeting[];

    @OneToMany(() => Phone, phone => phone.employee)
    phones: Phone[];

    @OneToMany(() => Meeting, meeting => meeting.creator)
    creatorMeetings: Meeting[];


    @OneToMany(() => Meeting, meeting => meeting.moderator)
    moderatorMeetings: Meeting[];

    @ManyToOne(() => Department, department => department.employees)
    @JoinColumn({ name: 'departmentId' })
    department: Department;

    @Column({ type: 'int', nullable: false })
    departmentId: number;
}
