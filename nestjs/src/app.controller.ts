import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {ApiTags} from "@nestjs/swagger";
import {EmployeeMeetingDto} from "./dto/employee-meeting.dto";
import {EmployeesService} from "./employees/employees.service";

@ApiTags('GlobalRoutes')
@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private employeesService: EmployeesService,
  ) {}


  @Post('addEmployeeToMeeting')
  async addEmployeeToMeeting(@Body() addEmployeeDto: EmployeeMeetingDto) {
    return this.employeesService.addToMeeting(addEmployeeDto)
  }

  @Post('removeEmployeeFromMeeting')
  async removeEmployeeFromMeeting(@Body() removeEmployeeDto: EmployeeMeetingDto) {
    return this.employeesService.removeFromMeeting(removeEmployeeDto)
  }
}
