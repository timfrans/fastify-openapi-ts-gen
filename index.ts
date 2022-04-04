import { initFastify } from "./initFastify";
import fastify from "fastify";
// import { components } from "./types";

const server = fastify();

initFastify(server).then((server) =>
  server.listen(3000, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  })
);

// const customerResponse: components["schemas"]["Customer"] = {
//   role: "mhsdgf",
// };
