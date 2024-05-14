import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentsService } from './departments.service';
import {Department} from "./department.entity";
import {DepartmentsController} from "./departments.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Department])],
    providers: [DepartmentsService],
    controllers: [DepartmentsController],
})
export class DepartmentsModule {}