import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import {DataSource} from "typeorm";
import {DepartmentsModule} from "./departments/departments.module";
import { EmployeesModule } from './employees/employees.module';
import { PhonesModule } from './phones/phones.module';
import { MeetingsModule } from './meetings/meetings.module';
import { RoomsModule } from './rooms/rooms.module';
import {MeetingsService} from "./meetings/meetings.service";
import {EmployeesService} from "./employees/employees.service";
import {Employee} from "./employees/entities/employee.entity";
import {Meeting} from "./meetings/entities/meeting.entity";
import * as process from "process";

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        url: process.env.DATABASE_URL || null,
        host: !process.env.DATABASE_URL ?  'postgres' : null,
        port: !process.env.DATABASE_URL ? 5432 : null,
        username: !process.env.DATABASE_URL ? 'postgres' : null,
        password: !process.env.DATABASE_URL ? 'password' : null,
        database: !process.env.DATABASE_URL ?  'exampleDB' : null,
        autoLoadEntities: true,
        // dropSchema: true,
        synchronize: true,
    }),

    TypeOrmModule.forFeature([Employee, Meeting]),
    DepartmentsModule,
    EmployeesModule,
    PhonesModule,
    MeetingsModule,
    RoomsModule,
  ],
  controllers: [AppController],
  providers: [AppService, EmployeesService, MeetingsService],
})
export class AppModule {

    constructor(private dataSource: DataSource) {
    }
}
