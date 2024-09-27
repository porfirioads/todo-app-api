import { ITask } from '../../common/interfaces/task.interface';
import { IList } from '../../common/interfaces/list.interface';
import { ApiProperty } from '@nestjs/swagger';
import { TaskDto } from './task.dto';

export class TaskListDto implements IList<ITask> {
  @ApiProperty({
    description: 'List of records',
    type: TaskDto,
  })
  data: ITask[];

  @ApiProperty({
    description: 'Total of records',
  })
  total: number;

  @ApiProperty({
    description: 'Page number',
  })
  page: number;

  @ApiProperty({
    description: 'Records count per page',
  })
  limit: number;
}
