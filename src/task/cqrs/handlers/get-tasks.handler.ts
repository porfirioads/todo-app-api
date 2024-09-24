import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { TaskEntityService } from '../../../common/database/entities/task-entity/task-entity.service';
import { ITask } from '../../../common/interfaces/task.interface';
import { GetTasksQuery } from '../queries/get-tasks.query';
import { Like } from 'typeorm';

@QueryHandler(GetTasksQuery)
export class GetTasksHandler implements ICommandHandler<GetTasksQuery> {
  constructor(private readonly taskEntityService: TaskEntityService) {}

  async execute(query: GetTasksQuery): Promise<ITask[]> {
    const { queryParams } = query;

    return this.taskEntityService.find({
      where: { description: Like(`%${queryParams.search}%`) },
      take: queryParams.limit,
    });
  }
}
