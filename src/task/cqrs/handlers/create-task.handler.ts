import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../commands/create-task.command';
import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { TaskEntity } from '../../database/entities/task-entity/task.entity';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(
    @Inject('TASK_REPOSITORY')
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  execute(command: CreateTaskCommand): Promise<TaskEntity> {
    const { description } = command;
    return this.taskRepository.save({ description });
  }
}
