import { FastifyInstance } from "fastify";
import fastifyAutoload from "fastify-autoload";
import fastifySwagger from "fastify-swagger";
import { CustomerSchema } from "./routes/customer/schemas";
const path = require("path");

export const initFastify = async (server: FastifyInstance) => {
  await server.register(fastifySwagger, {
    routePrefix: "/docs",
    exposeRoute: true,
    openapi: {
      openapi: "3.0.0",
      servers: [{ url: "http://localhost" }],
    },
    refResolver: {
      buildLocalReference: function (json) {
        return json["$id"] as string;
      },
    },
  });

  server.addSchema(CustomerSchema);

  await server.register(fastifyAutoload, {
    dir: path.join(__dirname, "routes"),
  });

  return server;
};
