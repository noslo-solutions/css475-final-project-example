import {Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Employee} from "../../employees/entities/employee.entity";
import {Department} from "../../departments/department.entity";
import {Room} from "../../rooms/entities/room.entity";

@Entity('meeting')
export class Meeting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'timestamptz',
    })
    startTime: Date;

    @Column({
        type: "interval",
    })
    duration;

    @Column({
        type: "varchar",
        length: 30,
    })
    purpose: string;

    @Column({
        type: "varchar",
        length: 30,
        nullable: true,
    })
    demo_test: string;

    @ManyToMany(() => Employee, (employee) => employee.meetings)
    attendees: Employee[];

    @ManyToOne(() => Room, room => room.meetings)
    @JoinColumn({ name: 'meeting_id' })
    room: Room;

    @Column({
        type: "int",
        nullable: false,
    })
    room_id: number;

    @ManyToOne(() => Employee, (employee) => employee.creatorMeetings)
    @JoinColumn({ name: 'creator_id' })
    creator: Employee;

    @Column({
        type: "int",
        nullable: false
    })
    creator_id: number;

    @ManyToOne(() => Employee, (employee) => employee.moderatorMeetings)
    @JoinColumn({name: 'moderator_id'})
    moderator: Employee;

    @Column({
        type: "int",
        nullable: true,
    })
    moderator_id: number;
}
