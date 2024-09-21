import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from 'src/task/dtos/create-task.dto';
import { UpdateTaskDto } from 'src/task/dtos/update-task.dto';

@Injectable()
export class TaskEntityService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async create(task: CreateTaskDto): Promise<TaskEntity> {
    return this.taskRepository.create(task);
  }

  async update(id: number, task: UpdateTaskDto): Promise<TaskEntity> {
    await this.taskRepository.update(id, task);
    return this.taskRepository.findOneBy({ id });
  }

  async findAll(): Promise<TaskEntity[]> {
    return this.taskRepository.find();
  }
}
