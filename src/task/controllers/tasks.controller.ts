import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { CreateTaskCommand } from '../cqrs/commands/create-task.command';
import { UpdateTaskCommand } from '../cqrs/commands/update-task.command';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { DeleteTaskCommand } from '../cqrs/commands/delete-task.command';
import { GetTasksQuery } from '../cqrs/queries/get-tasks.query';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() body: CreateTaskDto) {
    return this.commandBus.execute(new CreateTaskCommand(body));
  }

  @Get()
  async find() {
    return this.queryBus.execute(new GetTasksQuery());
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: UpdateTaskDto) {
    return this.commandBus.execute(new UpdateTaskCommand(id, body));
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.commandBus.execute(new DeleteTaskCommand(id));
  }
}
