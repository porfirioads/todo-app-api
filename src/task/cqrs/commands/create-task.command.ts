import { CreateTaskDto } from '../../dtos/create-task.dto';

export class CreateTaskCommand {
  constructor(public readonly input: CreateTaskDto) {}
}
