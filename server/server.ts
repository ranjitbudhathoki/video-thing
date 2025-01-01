import Fastify from "fastify";
import userRoutes from "./routes/user.routes.ts";

const fastify = Fastify({
  logger: true,
});

fastify.register(userRoutes, { prefix: "/api/v1" });

fastify.listen({ port: 8080 }, () => {
  console.log("Server is listening on port 8080");
});
