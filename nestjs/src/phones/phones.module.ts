import { Module } from '@nestjs/common';
import { PhonesService } from './phones.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Phone} from "./entities/phone.entity";
import {PhoneType} from "./entities/phone-type.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Phone, PhoneType]),
  ],
  controllers: [],
  providers: [PhonesService]
})
export class PhonesModule {}
