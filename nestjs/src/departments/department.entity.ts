import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Employee} from "../employees/entities/employee.entity";

@Entity({name: 'department'})
export class Department {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 20})
    name: string;

    @OneToMany(() => Employee, employee => employee.department)
    employees: Employee[];
}