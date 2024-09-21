import { UpdateTaskDto } from '../../dtos/update-task.dto';

export class UpdateTaskCommand {
  constructor(
    public readonly id: number,
    public readonly input: UpdateTaskDto,
  ) {}
}
