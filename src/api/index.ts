// src/api/api.ts
import createAPI, { Request, Response, NextFunction, API } from "lambda-api";

// initialize the API
const api = createAPI();

api.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

api.get("/greet/:name", (req: Request, res: Response) => {
  const name = req.params.name;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  res.json({ message: `Hello ${name}!` });
});

// Error handling middleware
api.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Error handling request", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

export default api;
