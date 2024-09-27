/**
 * Interface with the data stored in the database.
 */
export interface ITaskEntity {
  id: number;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Interface with the data needed to create a entity record in the database.
 */
export type ICreateTaskEntity = Omit<
  ITaskEntity,
  'id' | 'createdAt' | 'updatedAt'
>;

/**
 * Interface with the data needed to update a entity record in the database.
 */
export type IUpdateTaskEntity = Partial<ICreateTaskEntity>;

/**
 * Interface with de data returned by endpoints.
 */
export type ITask = ITaskEntity;

/**
 * Interface with the data needed by the create endpoint.
 */
export type ICreateTaskDto = Omit<
  ITaskEntity,
  'id' | 'completed' | 'createdAt' | 'updatedAt'
>;

/**
 * Interface with the data needed by the update endpoint.
 */
export type IUpdateTaskDto = Partial<ICreateTaskDto>;
