import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { CreateTaskCommand } from '../cqrs/commands/create-task.command';
import { UpdateTaskCommand } from '../cqrs/commands/update-task.command';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { DeleteTaskCommand } from '../cqrs/commands/delete-task.command';
import { GetTasksQuery } from '../cqrs/queries/get-tasks.query';
import { GetTaskByIdQuery } from '../cqrs/queries/get-task-by-id.query';
import { GetTasksQueryParamsDto } from '../dtos/get-tasks-query-params.dto';
import { FindByIdParamsDto } from '../dtos/find-by-id-params.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaskListDto } from '../dtos/task-list.dto';
import { TaskDto } from '../dtos/task.dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @ApiOperation({
    summary: 'Get all tasks',
    description: 'Retrieves all tasks with optional filtering',
  })
  @ApiResponse({
    status: 200,
    type: TaskListDto,
  })
  @Get()
  async find(@Query() query: GetTasksQueryParamsDto) {
    return this.queryBus.execute(new GetTasksQuery(query));
  }

  @ApiOperation({
    summary: 'Get a task by ID',
    description: 'Retrieves a specific task by its ID',
  })
  @ApiResponse({
    status: 200,
    type: TaskDto,
  })
  @Get(':id')
  async findById(@Param() params: FindByIdParamsDto) {
    return this.queryBus.execute(new GetTaskByIdQuery(params.id));
  }

  @ApiOperation({
    summary: 'Create a new task',
    description: 'Creates a new task',
  })
  @ApiBody({
    type: CreateTaskDto,
  })
  @ApiResponse({
    status: 200,
    type: TaskDto,
  })
  @Post()
  async create(@Body() body: CreateTaskDto) {
    return this.commandBus.execute(new CreateTaskCommand(body));
  }

  @ApiOperation({
    summary: 'Update a task',
    description: 'Updates an existing task identified by its ID',
  })
  @ApiBody({
    type: UpdateTaskDto,
  })
  @ApiResponse({
    status: 200,
    type: TaskDto,
  })
  @Patch(':id')
  async update(
    @Param() params: FindByIdParamsDto,
    @Body() body: UpdateTaskDto,
  ) {
    return this.commandBus.execute(new UpdateTaskCommand(params.id, body));
  }

  @ApiOperation({
    summary: 'Delete a task',
    description: 'Deletes a specific task by its ID',
  })
  @ApiResponse({
    status: 200,
    type: TaskDto,
  })
  @Delete(':id')
  async delete(@Param() params: FindByIdParamsDto) {
    return this.commandBus.execute(new DeleteTaskCommand(params.id));
  }
}
