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
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  limit?: number;

  @IsOptional()
  @Transform(({ value }) =>
    plainToClass(GetTasksQuerySortDto, JSON.parse(value)),
  )
  @ValidateNested()
  @Type(() => GetTasksQuerySortDto)
  order?: IListQuerySort<ITask>;
}
