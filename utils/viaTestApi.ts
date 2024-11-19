import { APIGatewayAuthorizerEvent, APIGatewayProxyEvent } from "aws-lambda";
import { handler } from "../src/index";

export async function viaTestApi(event: APIGatewayProxyEvent, context: any) {
  return await handler(event, context, () => {});
}
