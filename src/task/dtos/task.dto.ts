import { ApiProperty } from '@nestjs/swagger';
import { ITask } from '../../common/interfaces/task.interface';

export class TaskDto implements ITask {
  @ApiProperty({
    description: 'Item ID',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Task description',
    example: 'Do homework',
  })
  description: string;

  @ApiProperty({
    description: 'Define if the task was completed',
    example: 'true',
  })
  completed: boolean;

  @ApiProperty({
    description: 'Item creation date',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Item update date',
  })
  updatedAt: Date;
}
