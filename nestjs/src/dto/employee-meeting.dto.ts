import {ApiProperty, ApiTags} from "@nestjs/swagger";
import {Column} from "typeorm";

@ApiTags('global')
export class EmployeeMeetingDto {
    @ApiProperty({
        example: 101
    })
    @Column({
        type: 'int'

    })
    meeting_id: number;

    @ApiProperty({
        example: 1
    })
    @Column({
        type: 'int'

    })
    employee_id: number;
}
