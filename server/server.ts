import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.listen({ port: 8080 }, () => {
  console.log("Server is listening on port 8080");
});
