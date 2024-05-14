import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';

@Injectable()
export class DepartmentsService {
    constructor(
        @InjectRepository(Department)
        private departmentsRepository: Repository<Department>,
    ) {}

    findAll(): Promise<Department[]> {
        return this.departmentsRepository.find();
    }

    findOne(id: number): Promise<Department | null> {
        return this.departmentsRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.departmentsRepository.delete(id);
    }
}