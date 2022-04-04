import { initFastify } from "./initFastify";
import fastify from "fastify";
import { components } from "./types";

const server = fastify();

initFastify(server).then((server) =>
  server.listen(3000, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  })
);

const customer: components["schemas"]["Customer"] = {
  role: "employee",
  age: 10,
  id: "abc",
  name: "jos",
};
