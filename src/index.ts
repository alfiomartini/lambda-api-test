import {
  APIGatewayProxyHandler,
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";
import api from "./api";

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  try {
    //api.run processes de event and returns an HTTP response
    return await api.run(event, context);
  } catch (error) {
    console.error("Unhandled error in lambda", (error as Error).message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
