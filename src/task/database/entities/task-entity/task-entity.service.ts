import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTaskDto } from '../../../dtos/update-task.dto';
import { CreateTaskDto } from '../../../dtos/create-task.dto';

@Injectable()
export class TaskEntityService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async create(task: CreateTaskDto): Promise<TaskEntity> {
    const newTask = await this.taskRepository.create({
      ...task,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return this.taskRepository.save(newTask);
  }

  async update(id: number, task: UpdateTaskDto): Promise<TaskEntity> {
    await this.taskRepository.update(id, {
      ...task,
      updatedAt: new Date(),
    });

    return this.taskRepository.findOneBy({ id });
  }

  async findAll(): Promise<TaskEntity[]> {
    return this.taskRepository.find();
  }
}
