import { Injectable } from '@nestjs/common';
import {
  DeleteResult,
  FindManyOptions,
  Repository,
  UpdateResult,
} from 'typeorm';
import { TaskEntity } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTaskDto } from '../../../../task/dtos/update-task.dto';
import { CreateTaskDto } from '../../../../task/dtos/create-task.dto';

@Injectable()
export class TaskEntityService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async create(task: CreateTaskDto): Promise<TaskEntity> {
    const newTask = this.taskRepository.create({
      ...task,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.taskRepository.save(newTask);
  }

  async update(id: number, task: UpdateTaskDto): Promise<UpdateResult> {
    return this.taskRepository.update(id, {
      ...task,
      updatedAt: new Date(),
    });
  }

  async findOneById(id: number): Promise<TaskEntity> {
    return this.taskRepository.findOneBy({ id });
  }

  async findAndCount(
    options?: FindManyOptions<TaskEntity>,
  ): Promise<[TaskEntity[], number]> {
    return this.taskRepository.findAndCount(options);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.taskRepository.delete({ id });
  }
}
