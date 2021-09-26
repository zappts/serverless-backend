/* eslint-disable import/prefer-default-export */
import { ToDoList } from '../interfaces/ToDoList';
import DynamoDB from '../aws/dynamoDB';
import TABLE_NAMES from '../constants/tableNames';

export class ToDoListBusiness {
  async postToDoList(toDoList: ToDoList): Promise<void> {
    const dynamoDb = new DynamoDB();

    const toDoListItem = {
      owner: toDoList.owner,
      tag: toDoList.tag,
      list: toDoList.list,
    };
    await dynamoDb.put(toDoListItem, TABLE_NAMES.TO_DO_LIST);
  }

  async getToDoListByTag(tag: string): Promise<ToDoList> {
    const dynamoDb = new DynamoDB();
    const item = await dynamoDb.get({ tag }, TABLE_NAMES.TO_DO_LIST) as ToDoList;
    return item;
  }
}
