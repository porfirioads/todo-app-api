import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../commands/create-task.command';
import { TaskEntityService } from '../../database/entities/task-entity/task-entity.service';
import { ITask } from '../../interfaces/task.interface';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(private readonly taskEntityService: TaskEntityService) {}

  execute(command: CreateTaskCommand): Promise<ITask> {
    const { input } = command;
    return this.taskEntityService.create(input);
  }
}
