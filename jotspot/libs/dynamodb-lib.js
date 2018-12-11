import AWS from 'aws-sdk';

export function call(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    return dynamoDB[action](params).promise();
}