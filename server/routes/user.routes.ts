export default async function users(fastify, options) {
  fastify.get("/users", async (requst, reply) => {
    return { users: [] };
  });

  fastify.get("/users/1", async (Request, reply) => {
    return {
      user: {
        name: "ranjit",
      },
    };
  });
}
