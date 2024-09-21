import { CqrsModule } from '@nestjs/cqrs';
import { CreateTaskHandler } from './cqrs/handlers/create-task.handler';
import { DatabaseModule } from '../common/database/database.module';
import { Module } from '@nestjs/common';
import { TaskEntityModule } from '../common/database/entities/task-entity/task-entity.module';
import { TasksController } from './controllers/tasks.controller';
import { UpdateTaskHandler } from './cqrs/handlers/update-task.handler';

@Module({
  imports: [CqrsModule, DatabaseModule, TaskEntityModule],
  controllers: [TasksController],
  providers: [CreateTaskHandler, UpdateTaskHandler],
})
export class TaskModule {}
