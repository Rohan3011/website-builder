import { Hono } from "hono";
import { db } from "../db";
import { eq } from "drizzle-orm";
import { contentTable } from "../db/schema";

export const contentRouter = new Hono();

contentRouter.post("/", async (c) => {
  try {
    const data = await c.req.json();

    const event = await db.insert(contentTable).values(data).returning();

    return c.json({ data: event });
  } catch (error) {
    console.log("ERROR : ", error);
    return c.json({ message: "Content creation failed", error }, 500);
  }
});

contentRouter.get("/", async (c) => {
  try {
    const content = await db.query.contentTable.findMany();
    return c.json(content);
  } catch (error) {
    console.log("ERROR: ", error);
    return c.json({ message: "Failed to retrieve Content", error }, 500);
  }
});

contentRouter.get("/:id", async (c) => {
  const idString = c.req.param("id");
  const id = parseInt(idString);

  try {
    const content = await db.query.contentTable.findFirst({
      where: eq(contentTable.id, id),
    });
    return c.json(content);
  } catch (error) {
    console.log("ERROR: ", error);
    return c.json({ message: "Failed to retrieve Content", error }, 500);
  }
});

contentRouter.patch("/:id", async (c) => {
  try {
    const idString = c.req.param("id");
    const id = parseInt(idString);

    const body = await c.req.json();

    const content = await db
      .update(contentTable)
      .set(body)
      .where(eq(contentTable.id, id))
      .returning();

    if (content) {
      return c.json(content);
    } else {
      return c.json({ message: "Content not found" }, 404);
    }
  } catch (error) {
    return c.json({ message: "Failed to retrieve Content", error }, 500);
  }
});
