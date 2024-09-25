import { plainToClass, Transform, Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import {
  IListQueryParams,
  IListQuerySort,
  ListQuerySortMode,
} from '../../common/interfaces/list-query-params.interface';
import { ITask } from '../../common/interfaces/task.interface';
import { ApiProperty } from '@nestjs/swagger';

export class GetTasksQuerySortDto implements IListQuerySort<ITask> {
  @IsOptional()
  @IsEnum(ListQuerySortMode)
  id?: ListQuerySortMode;

  @IsOptional()
  @IsEnum(ListQuerySortMode)
  description?: ListQuerySortMode;

  @IsOptional()
  @IsEnum(ListQuerySortMode)
  completed?: ListQuerySortMode;

  @IsOptional()
  @IsEnum(ListQuerySortMode)
  createdAt?: ListQuerySortMode;

  @IsOptional()
  @IsEnum(ListQuerySortMode)
  updatedAt?: ListQuerySortMode;
}

export class GetTasksQueryParamsDto implements IListQueryParams<ITask> {
  @ApiProperty({
    required: false,
    description: 'Text to search in tasks descriptions',
    example: 'Buy',
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({
    required: false,
    description:
      'Desired page number when records count is greater than `limit`',
    example: 2,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  page?: number;

  @ApiProperty({
    required: false,
    description: 'Desired records count per page',
    example: 15,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  limit?: number;

  // TODO: Check if it is possible to use examples from GetTasksQuerySortDto
  @ApiProperty({
    required: false,
    description: 'Query sort settings',
    type: String,
    example: JSON.stringify({
      id: 'ASC',
      description: 'DESC',
      completed: 'ASC',
    }),
  })
  @IsOptional()
  @Transform(({ value }) =>
    plainToClass(GetTasksQuerySortDto, JSON.parse(value)),
  )
  @ValidateNested()
  @Type(() => GetTasksQuerySortDto)
  sort?: IListQuerySort<ITask>;
}
