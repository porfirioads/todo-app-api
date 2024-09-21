import { Module } from '@nestjs/common';
import { TaskEntityService } from './task-entity.service';
import { TaskEntity } from './task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [TaskEntityService],
  exports: [TaskEntityService],
})
export class TaskEntityModule {}
