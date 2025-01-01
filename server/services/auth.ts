import { FastifyInstance } from "fastify";
import oauthPlugin from "@fastify/oauth2";

export default async function authentication(
  fastify: FastifyInstance,
  options: any
) {
  await fastify.register(oauthPlugin, {
    name: "google",
    credentials: {
      client: {
        id: "3323",
        secret: "1221",
      },
      auth: oauthPlugin.GOOGLE_CONFIGURATION,
    },
    startRedirectPath: "/login/google",
    callbackUri: "/callback/",
  });
}
