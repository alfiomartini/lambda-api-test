import { handler } from "../src";
import { createEvent } from "../src/utils";
import { Context } from "aws-lambda";

const processEvent = createEvent("/process", "POST", { num1: 5, num2: 10 });

const testContex = {} as Context;

async function main() {
  const response = await handler(processEvent, testContex, () => {});
  console.log(response);
}

main();
