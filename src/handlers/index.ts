import { Request, Response } from "lambda-api";
import { ProcessRequestBody } from "../types";

export const hello = (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
};

export const greet = (req: Request, res: Response) => {
  const name = req.params.name;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  res.json({ message: `Hello ${name}!` });
};

export const process = (req: Request, res: Response) => {
  let body: ProcessRequestBody;
  let num1: number, num2: number;

  if (!req.body) {
    return res.status(400).json({ error: "Request body is missing" });
  }

  try {
    body = req.body;
  } catch (error) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  ({ num1, num2 } = body);

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.status(400).json({ error: "num1 and num2 must be numbers" });
  }

  const sum = num1 + num2;
  const product = num1 * num2;

  res.json({
    message: "Processing successful",
    sum,
    product,
  });
};
