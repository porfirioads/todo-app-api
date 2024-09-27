import { Injectable } from '@nestjs/common';
import {
  DeleteResult,
  FindManyOptions,
  Repository,
  UpdateResult,
} from 'typeorm';
import { TaskEntity } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ITaskEntity,
  ICreateTaskEntity,
  IUpdateTaskEntity,
} from '../../../../common/interfaces/task.interface';

@Injectable()
export class TaskEntityService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async create(task: ICreateTaskEntity): Promise<ITaskEntity> {
    const newTask = this.taskRepository.create({
      ...task,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.taskRepository.save(newTask);
  }

  async update(id: number, task: IUpdateTaskEntity): Promise<UpdateResult> {
    return this.taskRepository.update(id, {
      ...task,
      updatedAt: new Date(),
    });
  }

  async findOneById(id: number): Promise<ITaskEntity> {
    return this.taskRepository.findOneBy({ id });
  }

  async findAndCount(
    options?: FindManyOptions<ITaskEntity>,
  ): Promise<[ITaskEntity[], number]> {
    return this.taskRepository.findAndCount(options);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.taskRepository.delete({ id });
  }
}
