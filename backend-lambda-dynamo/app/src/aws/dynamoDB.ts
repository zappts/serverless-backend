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
}

export default DynamoDB;
