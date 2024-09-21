/**
 * Interface for entity data stored in database.
 */
export interface ITaskBase {
  id: number;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Interface for entity data returned data by endpoints.
 */
export type ITask = ITaskBase;

/**
 * Interface for entity create dto.
 */
export type ICreateTaskDto = Omit<
  ITaskBase,
  'id' | 'completed' | 'createdAt' | 'updatedAt'
>;

/**
 * Interface for entity update dto.
 */
export type IUpdateTaskDto = Partial<ICreateTaskDto>;
