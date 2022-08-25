/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

class DynamoDB {
  async put(item, tableName) {
    const params = {
      TableName: tableName,
      Item: item,
    };

    await docClient.put(params).promise();
  }
}

module.exports = DynamoDB;