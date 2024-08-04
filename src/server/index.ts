import { Hono } from "hono";
import { logger } from "hono/logger";

import type { JwtVariables } from "hono/jwt";
import { contentRouter } from "./routes";

type Variables = JwtVariables;

const app = new Hono<{ Variables: Variables }>().basePath("/api");

app.use(logger());

app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});
app.route("/pages", contentRouter);
export default app;
export type AppType = typeof app;
