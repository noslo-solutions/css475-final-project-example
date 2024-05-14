import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Employee} from "./entities/employee.entity";
import {Repository} from "typeorm";
import {Phone} from "../phones/entities/phone.entity";
import {NotFoundError} from "rxjs";
import {EmployeeMeetingDto} from "../dto/employee-meeting.dto";
import {MeetingsService} from "../meetings/meetings.service";

@Injectable()
export class EmployeesService {
  constructor(
      @InjectRepository(Employee)
      private employeeRepository: Repository<Employee>,
      private meetingsService: MeetingsService,
  ) {
  }
  create(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(employee);
  }

  findAll() {
    return this.employeeRepository.find({
      relations: ['phones'],
    });
  }

  findOne(id: number, options: {} = {}) {
    options = {
      ...{where: {id: id}},
      ...options
    };
    return this.employeeRepository.findOne(options);
  }

  search(queryParam: string) {
    return this.employeeRepository.createQueryBuilder("employee")
        .where("employee.name ILIKE :searchTerm", { searchTerm: `%${queryParam}%` })
        .orWhere("employee.EmployeeNum ILIKE :searchTerm", { searchTerm: `%${queryParam}%` })
        .orWhere("employee.email ILIKE :searchTerm", { searchTerm: `%${queryParam}%` })
        .orWhere("employee.salary::text ILIKE :searchTerm", { searchTerm: `%${queryParam}%` })
        .getMany();
  }

  async addToMeeting(addEmployeeDto: EmployeeMeetingDto) {
    let employee = await this.findOne(addEmployeeDto.employee_id, {
      relations: ['meetings']
    });

    if (!employee) {
      throw new NotFoundError(`Employee ${addEmployeeDto.employee_id} not found`)
    }

    let meeting = await  this.meetingsService.findOne(addEmployeeDto.meeting_id);

    if (!meeting) {
      throw new NotFoundError(`Meeting ${addEmployeeDto.meeting_id} not found`)
    }
    employee.meetings.push(meeting)
    return this.employeeRepository.save(employee);
  }

  async removeFromMeeting(removeFromMeeting: EmployeeMeetingDto) {
    let employee = await this.findOne(removeFromMeeting.employee_id, {
      relations: ['meetings']
    });

    if (!employee) {
      throw new NotFoundError(`Employee ${removeFromMeeting.employee_id} not found`)
    }

    let meeting = await  this.meetingsService.findOne(removeFromMeeting.meeting_id);

    if (!meeting) {
      throw new NotFoundError(`Meeting ${removeFromMeeting.meeting_id} not found`)
    }
    employee.meetings = employee.meetings.filter((meeting) => (meeting.id != removeFromMeeting.meeting_id))
    return this.employeeRepository.save(employee);
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeRepository.update(id, updateEmployeeDto);
  }

  remove(id: number) {
    return this.employeeRepository.delete(id);
  }
}
