import {Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {Phone} from "./phone.entity";

export enum phone_types {
    Work = 'W',
    Cell = 'C',
    Home = 'H',
    Page = 'P',
    Business = 'B',
}
@Entity('phone_type')
export class PhoneType {
    @PrimaryColumn({
        nullable: false,
        type: 'varchar',
        enum: phone_types,
    })
    id: phone_types;

    @Column({
        type: 'varchar',
        length: 10
    })
    name: string;

    @OneToMany(() => Phone, (phone) => phone.phoneType)
    phones: Phone[];

}