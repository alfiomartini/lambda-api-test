import { APIGatewayProxyEvent, Context } from "aws-lambda";
import sayHello from "../events/hello.json";
import { handler } from "../src";

const sayHelloEvent = sayHello as APIGatewayProxyEvent;

const testContext = {} as Context;

async function main() {
  const response = await handler(sayHelloEvent, testContext, () => {});
  console.log(response);
}

main();
