export default interface ITodo {
  id: number;
  body: string;
  completed: boolean;
  created?: Date;
  updated?: Date;
}
