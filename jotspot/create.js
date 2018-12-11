import uuid from 'uuid';
import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';


export async function main(event, context, callback) {
    // Req body passed in as JSON encoded string in 'event.body'
    const data = JSON.parse(event.body);
    
    const params = {
        TableName: "notes",
        Item: {
            userId: event.requestContext.identity.cognitoIdentityId, // user identity id of Cognito Identity Pool as user id of authenticated user
            noteId: uuid.v1(), // unique id
            content: data.content, // parsed from req body
            attachment: data.attachment, // parsed from req body
            createdAt: Date.now() // current Unix timestamp
        }
    };
    
    try {
        await dynamoDbLib.call('put', params);
        return success(params.Item);
    }
    catch (e) {
        console.log(e)
        return failure({ status: false });
    }
}