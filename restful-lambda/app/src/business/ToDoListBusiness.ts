/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ToDoList } from '../interfaces/ToDoList';

export class ToDoListBusiness {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async postToDoList(toDoList: ToDoList): Promise<void> {
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getToDoListByTag(tag: string): Promise<ToDoList> {
    return undefined;
  }
}
