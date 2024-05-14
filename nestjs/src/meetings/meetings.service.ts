import { Injectable } from '@nestjs/common';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Meeting} from "./entities/meeting.entity";
import {FindOptionsWhere, Repository} from "typeorm";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";

@Injectable()
export class MeetingsService {

  constructor(
      @InjectRepository(Meeting)
      private meetingRepository: Repository<Meeting>
  ) {
  }
  create(createMeetingDto: CreateMeetingDto) {
   const meeting = this.meetingRepository.create(createMeetingDto);
   return this.meetingRepository.save(meeting);
  }

  findAll() {
    return this.meetingRepository.find({
      relations: ['attendees', 'room', 'creator', 'moderator']
    });
  }

  findOne(id: number, options:FindOneOptions<Meeting> = {}) {
   options = {
      ...{where: {id: id}},
     ...options
    }
    return this.meetingRepository.findOne(options);
  }

  update(id: number, updateMeetingDto: UpdateMeetingDto) {
    return this.meetingRepository.update(id, updateMeetingDto as Meeting);
  }

  remove(id: number) {
    return this.meetingRepository.delete(id);
  }
}
