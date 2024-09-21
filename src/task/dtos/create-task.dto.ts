import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { ITask } from '../interfaces/task.interface';

export class CreateTaskDto implements Omit<ITask, 'id'> {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  completed: boolean;

  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
