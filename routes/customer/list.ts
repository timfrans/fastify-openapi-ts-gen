import { CustomerSchema } from "./schemas";
import { FastifyReply, FastifyRequest } from "fastify";
import { Type } from "@sinclair/typebox";
import { getCustomers } from "../../domain/Customer";

export const ListCustomersSchema = {
  description: "Lists all customers",
  tags: ["Customers"],
  response: {
    200: Type.Array(CustomerSchema),
  },
};

const handler = async (req: FastifyRequest, res: FastifyReply) => {
  return res.status(200).send(getCustomers());
};

export default handler;
