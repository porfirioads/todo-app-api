import { IsNotEmpty, IsString } from 'class-validator';
import { ICreateTaskDto } from '../../common/interfaces/task.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto implements ICreateTaskDto {
  @ApiProperty({
    required: true,
    description: 'Description of the task',
    example: 'Buy a math book',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}
