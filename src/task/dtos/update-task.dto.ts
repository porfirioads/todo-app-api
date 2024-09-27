import { IsOptional, IsString } from 'class-validator';
import { IUpdateTaskDto } from '../../common/interfaces/task.interface';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto implements IUpdateTaskDto {
  @ApiProperty({
    required: false,
    description: 'Description of the task',
    example: 'Buy a math book',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
