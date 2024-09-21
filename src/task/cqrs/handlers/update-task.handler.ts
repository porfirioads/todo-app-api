import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateTaskCommand } from '../commands/update-task.command';
import { TaskEntityService } from '../../../common/database/entities/task-entity/task-entity.service';
import { ITask } from '../../../common/interfaces/task.interface';

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
  constructor(private readonly taskEntityService: TaskEntityService) {}

  execute(command: UpdateTaskCommand): Promise<ITask> {
    const { id, input } = command;
    return this.taskEntityService.update(id, input);
  }
}
