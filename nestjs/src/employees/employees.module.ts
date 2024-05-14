import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Employee} from "./entities/employee.entity";
import {PhonesModule} from "../phones/phones.module";
import {MeetingsModule} from "../meetings/meetings.module";
import {MeetingsService} from "../meetings/meetings.service";
import {Meeting} from "../meetings/entities/meeting.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([Employee, Meeting
      ]),
      MeetingsModule,
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService, MeetingsService]
})
export class EmployeesModule {}
