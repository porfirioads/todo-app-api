import { IsNotEmpty, IsString } from 'class-validator';
import { ICreateTaskDto } from '../interfaces/task.interface';

export class CreateTaskDto implements ICreateTaskDto {
  @IsNotEmpty()
  @IsString()
  description: string;
}
