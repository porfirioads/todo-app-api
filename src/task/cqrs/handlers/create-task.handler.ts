import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../commands/create-task.command';
import { TaskEntityService } from '../../../common/database/entities/task-entity/task-entity.service';
import { ITask } from '../../../common/interfaces/task.interface';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(private readonly taskEntityService: TaskEntityService) {}

  execute(command: CreateTaskCommand): Promise<ITask> {
    const { input } = command;
    return this.taskEntityService.create(input);
  }
}
