import { Controller, Get } from '@nestjs/common';
import { DepartmentsService } from "./departments.service";
import {Department} from "./department.entity";
import {ApiTags} from "@nestjs/swagger";


@ApiTags('departments')
@Controller('departments')
export class DepartmentsController {

    constructor(private departmentsService: DepartmentsService) {}
    @Get()
    async findAll(): Promise<Department[]> {
        return this.departmentsService.findAll();
    }
}