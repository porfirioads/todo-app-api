import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TasksController } from './controllers/tasks.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateTaskHandler } from './cqrs/handlers/create-task.handler';
import { TaskEntityModule } from './database/entities/task-entity/task-entity.module';

@Module({
  imports: [CqrsModule, DatabaseModule, TaskEntityModule],
  controllers: [TasksController],
  providers: [CreateTaskHandler],
})
export class TaskModule {}
