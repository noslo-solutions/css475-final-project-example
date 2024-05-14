import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('employees')
export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
