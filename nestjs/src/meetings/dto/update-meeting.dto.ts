import { PartialType } from '@nestjs/mapped-types';
import { CreateMeetingDto } from './create-meeting.dto';
import {IsInt, IsNotEmpty} from "@nestjs/class-validator";
import {ApiTags} from "@nestjs/swagger";
@ApiTags('meetings')
export class UpdateMeetingDto extends PartialType(CreateMeetingDto) {
    @IsInt()
    @IsNotEmpty()
    id: number;
}
