import { Module } from '@nestjs/common';
import { TaskEntityModule } from './database/entities/task-entity/task-entity.module';

@Module({
  imports: [TaskEntityModule],
})
export class TaskModule {}
