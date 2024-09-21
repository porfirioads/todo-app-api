import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { TaskEntity } from '../../database/entities/task-entity/task.entity';
import { TaskEntityService } from 'src/task/database/entities/task-entity/task-entity.service';
import { UpdateTaskCommand } from '../commands/update-task.command';

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
  constructor(private readonly taskEntityService: TaskEntityService) {}

  execute(command: UpdateTaskCommand): Promise<TaskEntity> {
    const { id, input } = command;
    return this.taskEntityService.update(id, input);
  }
}
