import { IsOptional, IsString } from 'class-validator';
import { IUpdateTaskDto } from '../../common/interfaces/task.interface';

export class UpdateTaskDto implements IUpdateTaskDto {
  @IsOptional()
  @IsString()
  description?: string;
}
