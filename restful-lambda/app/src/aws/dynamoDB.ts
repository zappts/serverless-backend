/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as AWS from 'aws-sdk';

const docClient = new AWS.DynamoDB.DocumentClient();

class DynamoDB {
  async put(item: unknown, tableName: string) {
    const params = {
      TableName: tableName,
      Item: item,
    };

    await docClient.put(params).promise();
  }

  async get(hashKey: unknown, tableName: string) {
    const params = {
      TableName: tableName,
      Key: hashKey,
    };
    const response = await docClient.get(params).promise();
    return response.Item;
  }
}

export default DynamoDB;
