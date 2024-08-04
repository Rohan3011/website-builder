import { Hono } from "hono";
import { logger } from "hono/logger";
import { poweredBy } from "hono/powered-by";
import { jwt } from "hono/jwt";
import { swaggerUI } from "@hono/swagger-ui";

import type { JwtVariables } from "hono/jwt";
import { authRouter } from "~/server/routes";

type Variables = JwtVariables;

const app = new Hono<{ Variables: Variables }>().basePath("/api");

//middlewares
app.use(poweredBy());
app.use(logger());
app.get("/_swagger", swaggerUI({ url: "/docs" }));

app.use(
  "/auth/*",
  jwt({
    secret: "it-is-very-secret",
  })
);

app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});

app.route("/auth", authRouter);

export default app;
export type AppType = typeof app;
