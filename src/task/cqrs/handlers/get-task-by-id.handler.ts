import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { TaskEntityService } from '../../../common/database/entities/task-entity/task-entity.service';
import { ITask } from '../../../common/interfaces/task.interface';
import { GetTaskByIdQuery } from '../queries/get-task-by-id.query';
import { NotFoundException } from '@nestjs/common';

@QueryHandler(GetTaskByIdQuery)
export class GetTaskByIdHandler implements ICommandHandler<GetTaskByIdQuery> {
  constructor(private readonly taskEntityService: TaskEntityService) {}

  async execute(query: GetTaskByIdQuery): Promise<ITask> {
    const { id } = query;
    const task = await this.taskEntityService.findOneById(id);

    if (!task) {
      throw new NotFoundException('TASK_NOT_FOUND');
    }

    return task;
  }
}
