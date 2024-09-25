import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { TaskEntityService } from '../../../common/database/entities/task-entity/task-entity.service';
import { ITask } from '../../../common/interfaces/task.interface';
import { GetTasksQuery } from '../queries/get-tasks.query';
import { FindManyOptions, Like } from 'typeorm';
import { IList } from '../../../common/interfaces/list.interface';

@QueryHandler(GetTasksQuery)
export class GetTasksHandler implements ICommandHandler<GetTasksQuery> {
  constructor(private readonly taskEntityService: TaskEntityService) {}

  async execute(query: GetTasksQuery): Promise<IList<ITask>> {
    const { queryParams } = query;
    const { search, page = 1, limit = 0, sort } = queryParams;
    const skip = (page - 1) * limit;

    const options: FindManyOptions<ITask> = {};

    if (search) {
      options.where = { description: Like(`%${search}%`) };
    }

    if (limit) {
      options.skip = skip;
      options.take = limit;
    }

    if (sort) {
      options.order = sort;
    }

    const [tasks, total] = await this.taskEntityService.findAndCount(options);
    return { data: tasks, total, page, limit };
  }
}
