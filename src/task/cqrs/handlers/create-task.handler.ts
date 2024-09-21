import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../commands/create-task.command';
import { TaskEntity } from '../../database/entities/task-entity/task.entity';
import { TaskEntityService } from 'src/task/database/entities/task-entity/task-entity.service';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(private readonly taskEntityService: TaskEntityService) {}

  execute(command: CreateTaskCommand): Promise<TaskEntity> {
    const { input } = command;
    return this.taskEntityService.create(input);
  }
}
