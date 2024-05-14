import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Employee} from "../../employees/entities/employee.entity";
import { phone_types, PhoneType } from "./phone-type.entity";

@Entity('phone')
export class Phone {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length:15,
        nullable: false,
    })
    number: string;

    @ManyToOne(() => Employee, employee => employee.phones)
    @JoinColumn()
    employee: Employee;

    @Column({ type: 'int', nullable: false })
    employeeId: number;

    @ManyToOne(() => PhoneType, phoneType => phoneType.phones)
    @JoinColumn({ name: 'phoneTypeID'})
    phoneType: PhoneType;

    @Column({
        type: 'varchar',
        enum: phone_types,
    })
    phoneTypeID: phone_types;
}
