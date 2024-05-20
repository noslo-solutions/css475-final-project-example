import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Room} from "./entities/room.entity";

@Injectable()
export class RoomsService {


  constructor(
      @InjectRepository(Room)
      private roomRepository: Repository<Room>) {}
  create(createRoomDto: CreateRoomDto) {
    return this.roomRepository.create(createRoomDto)
  }

  findAll() {
    return this.roomRepository.find();
  }

  findOne(id: number) {
    return this.roomRepository.findOneBy({id: id})
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return this.roomRepository.update(id, updateRoomDto)
  }

  remove(id: number) {
    return this.roomRepository.delete(id)
  }
}
