import { IsNotEmpty, IsString } from 'class-validator';
import { ITask } from '../interfaces/task.interface';

export class CreateTaskDto
  implements Omit<ITask, 'id' | 'completed' | 'createdAt' | 'updatedAt'>
{
  @IsNotEmpty()
  @IsString()
  description: string;
}
