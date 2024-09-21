import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { CreateTaskCommand } from '../cqrs/commands/create-task.command';
import { UpdateTaskCommand } from '../cqrs/commands/update-task.command';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { DeleteTaskCommand } from '../cqrs/commands/delete-task.command';

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

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: UpdateTaskDto) {
    return this.commandBus.execute(new UpdateTaskCommand(id, body));
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.commandBus.execute(new DeleteTaskCommand(id));
  }
}
