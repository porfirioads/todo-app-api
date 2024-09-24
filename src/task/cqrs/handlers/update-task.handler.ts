import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateTaskCommand } from '../commands/update-task.command';
import { TaskEntityService } from '../../../common/database/entities/task-entity/task-entity.service';
import { ITask } from '../../../common/interfaces/task.interface';
import { NotFoundException } from '@nestjs/common';

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
  constructor(private readonly taskEntityService: TaskEntityService) {}

  async execute(command: UpdateTaskCommand): Promise<ITask> {
    const { id, input } = command;
    let task = await this.taskEntityService.findOneById(id);

    if (!task) {
      throw new NotFoundException('TASK_NOT_FOUND');
    }

    await this.taskEntityService.update(id, input);
    task = await this.taskEntityService.findOneById(id);
    return task;
  }
}
