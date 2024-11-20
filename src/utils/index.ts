import { APIGatewayAuthorizerEvent, APIGatewayProxyEvent } from "aws-lambda";
import { handler } from "../index";
import { API } from "lambda-api";

export async function viaTestApi(event: APIGatewayProxyEvent, context: any) {
  return await handler(event, context, () => {});
}

export const createEvent = (
  path: string,
  method: string,
  body: object | null
): APIGatewayProxyEvent => {
  return {
    httpMethod: method,
    path,
    headers: { "Content-Type": "application/json" },
    queryStringParameters: null,
    pathParameters: null,
    body: JSON.stringify(body),
    isBase64Encoded: false,
  } as unknown as APIGatewayProxyEvent;
};
