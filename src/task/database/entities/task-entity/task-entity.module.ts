import { Module } from '@nestjs/common';
import { TaskEntityService } from './task-entity.service';
import { DataSource } from 'typeorm';
import { TaskEntity } from './task.entity';
import { SqliteModule } from '../../datasources/sqlite/sqlite.module';

export const taskEntityProviders = [
  {
    provide: 'TASK_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TaskEntity),
    inject: ['DATA_SOURCE'],
  },
];

@Module({
  imports: [SqliteModule],
  providers: [...taskEntityProviders, TaskEntityService],
})
export class TaskEntityModule {}
