import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { TaskEntityService } from '../../../common/database/entities/task-entity/task-entity.service';
import { ITask } from '../../../common/interfaces/task.interface';
import { DeleteTaskCommand } from '../commands/delete-task.command';
import { NotFoundException } from '@nestjs/common';

@CommandHandler(DeleteTaskCommand)
export class DeleteTaskHandler implements ICommandHandler<DeleteTaskCommand> {
  constructor(private readonly taskEntityService: TaskEntityService) {}

  async execute(command: DeleteTaskCommand): Promise<ITask> {
    const { id } = command;
    const task = await this.taskEntityService.findOneById(id);

    if (!task) {
      throw new NotFoundException('TASK_NOT_FOUND');
    }

    await this.taskEntityService.delete(id);
    return task;
  }
}
