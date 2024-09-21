import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskEntityService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async findAll(): Promise<TaskEntity[]> {
    return this.taskRepository.find();
  }
}
