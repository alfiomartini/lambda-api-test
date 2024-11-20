// src/api/api.ts
import createAPI, { Request, Response, NextFunction, API } from "lambda-api";
import { ProcessRequestBody } from "../types";
import { hello, greet, process } from "../handlers";

// initialize the API
const api: API = createAPI();

api.get("/hello", hello);

api.get("/greet/:name", greet);

// New POST route
api.post("/process", process);

// Error handling middleware
api.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Error handling request", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

export default api;
