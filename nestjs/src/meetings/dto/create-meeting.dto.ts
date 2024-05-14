import {IsDateString, IsInt, IsNotEmpty, IsOptional, IsString} from "@nestjs/class-validator";
import {ApiProperty, ApiPropertyOptional, ApiTags} from "@nestjs/swagger";

@ApiTags('meetings')
export class CreateMeetingDto {

    @ApiProperty()
    @IsDateString()
    @IsNotEmpty()
    startTime: Date;

    @ApiProperty({
        example: 'Standup'
    })
    @IsString()
    @IsNotEmpty()
    purpose: string;

    @ApiProperty({
        description: 'Format as a postgresql interval',
        example: '30 minutes'
    })
    duration: string;

    @ApiProperty({
        description: 'Id of the room',
        example: 201,
    })
    @IsInt()
    @IsNotEmpty()
    room_id: number;


    @ApiProperty({
        description: 'Id of the user creating it'
    })
    @IsInt()
    @IsNotEmpty()
    creator_id: number;

    @ApiPropertyOptional({
        description: 'Id for the moderator',
    })
    @IsInt()
    @IsOptional()
    moderator_id: number|null;
}
