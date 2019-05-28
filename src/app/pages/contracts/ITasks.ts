export interface ITasks {
  taskId: number;
  projectId: string;
  description: string;
  creationDate: Date;
  finishDate: Date;
  enabled: boolean;
}
