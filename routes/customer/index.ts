import { FastifyPluginAsync } from "fastify";
import listCustomersHandler, { ListCustomersSchema } from "./list";
import pagedListCustomerHandler, { PagedListCustomerSchema } from "./pagedList";

const routes: FastifyPluginAsync = async (server) => {
  server.get("/", { schema: ListCustomersSchema }, listCustomersHandler);
  server.get(
    "/paged",
    { schema: PagedListCustomerSchema },
    pagedListCustomerHandler
  );
};

export const autoPrefix = "/customers";

export default routes;
