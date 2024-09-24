import { GetTasksQueryParamsDto } from '../../dtos/get-tasks-query-params.dto';

export class GetTasksQuery {
  constructor(public queryParams: GetTasksQueryParamsDto) {}
}
