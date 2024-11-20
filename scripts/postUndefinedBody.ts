import { handler } from "../src";
import { createEvent } from "../src/utils";
import { Context } from "aws-lambda";

const processEvent = createEvent("/process", "POST", null);

const testContex = {} as Context;

async function main() {
  const response = await handler(processEvent, testContex, () => {});
  console.log(response);
}

main();
