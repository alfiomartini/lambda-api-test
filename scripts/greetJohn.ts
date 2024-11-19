import { APIGatewayProxyEvent, Context } from "aws-lambda";
import greetJohn from "../events/greetJohn.json";
import { handler } from "../src";

const greetJohnEvent = greetJohn as APIGatewayProxyEvent;

const testContex = {} as Context;

async function main() {
  const response = await handler(greetJohnEvent, testContex, () => {});
  console.log(response);
}

main();
