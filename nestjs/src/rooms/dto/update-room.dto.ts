import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './create-room.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('rooms')
export class UpdateRoomDto extends PartialType(CreateRoomDto) {}
