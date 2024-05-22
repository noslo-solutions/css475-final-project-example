import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Meeting } from "../../meetings/entities/meeting.entity";

@Entity('room')
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 10,
        nullable: false,
    })
    building: string;

    @Column({
        type: 'varchar',
        length: 5,
        nullable: false,
    })
    room: string;

    @Column({
        type: 'int',
        nullable: true,
    })
    capacity: number|null;

    @OneToMany(() => Meeting, (meeting) => meeting.room)
    meetings: Meeting[];
}