import { Static, Type } from "@sinclair/typebox";
import { FastifyReply, FastifyRequest } from "fastify";
import { getCustomers } from "../../domain/Customer";
import { CustomerSchema } from "./schemas";

export const PagedCustomerSchema = Type.Object({
  page: Type.Number(),
  pageSize: Type.Number(),
  total: Type.Number(),
  items: Type.Array(Type.Ref(CustomerSchema)),
});
export type PagedResponsePayload = Static<typeof PagedCustomerSchema>;

export const PagedListCustomerSchema = {
  summary: "Returns a paged list of customers",
  tags: ["Customers"],
  response: {
    200: PagedCustomerSchema,
  },
};

const handler = async (req: FastifyRequest, res: FastifyReply) => {
  const customers = getCustomers();

  return res.status(200).send({
    page: 1,
    pageSize: 1,
    total: 2,
    items: [customers[0]],
  });
};

export default handler;
