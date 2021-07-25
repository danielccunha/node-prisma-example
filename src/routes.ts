import { Router } from "express";
import { PrismaClient } from "@prisma/client";

export const routes = Router();
const client = new PrismaClient();

routes.get("/users", async (_request, response) => {
  const users = await client.user.findMany();
  return response.json(users);
});

routes.post("/users", async ({ body }, response) => {
  let user = await client.user.findUnique({ where: { username: body.username } });
  if (!user) {
    user = await client.user.create({ data: { username: body.username } });
  }

  return response.status(201).json(user);
});

routes.delete("/users/:id", async ({ params }, response) => {
  try {
    await client.user.delete({ where: { id: parseInt(params.id) } });
    return response.status(204).send();
  } catch (error) {
    return response.status(404).json({ message: "User not found." });
  }
});

routes.get("/users/:id/posts", async ({ params }, response) => {
  const posts = await client.post.findMany({
    where: { user_id: parseInt(params.id) },
    select: {
      id: true,
      title: true,
      post: true,
      created_at: true,
      updated_at: true,
    },
  });
  return response.json(posts);
});

routes.post("/users/:id/posts", async (request, response) => {
  const user_id = parseInt(request.params.id);
  const { title, content } = request.body;
  const userExists = await client.user.findUnique({ where: { id: user_id } });

  if (!userExists) {
    return response.status(404).json({ message: "User not found." });
  }

  const post = await client.post.create({ data: { title, post: content, user_id } });
  return response.status(201).json(post);
});
