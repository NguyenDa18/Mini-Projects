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
        return failure({ status: false });
    }
    
    dynamoDb.put(params, (err, data) => {
        // Set response headers to enable CORS
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        };
        
        // return status code 500 on err
        if (err) {
            const response = {
                statusCode: 500,
                headers: headers,
                body: JSON.stringify({ status: false })
            };
            callback(null, response);
            return;
        }
        
        // return status code 200 and newly created item on success
        const response = {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify(params.Item)
        };
        callback(null, response);
    });
    
}