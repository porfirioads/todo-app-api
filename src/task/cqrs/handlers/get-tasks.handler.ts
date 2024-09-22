import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { TaskEntityService } from '../../../common/database/entities/task-entity/task-entity.service';
import { ITask } from '../../../common/interfaces/task.interface';
import { GetTasksQuery } from '../queries/get-tasks.query';

@QueryHandler(GetTasksQuery)
export class GetTasksHandler implements ICommandHandler<GetTasksQuery> {
  constructor(private readonly taskEntityService: TaskEntityService) {}

  async execute(query: GetTasksQuery): Promise<ITask[]> {
    return this.taskEntityService.findAll();
  }
}
