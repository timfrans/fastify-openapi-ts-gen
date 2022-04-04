import { Static, TLiteral, TUnion, Type } from "@sinclair/typebox";
import { roles } from "../../domain/Customer";

type IntoStringUnion<T> = {
  [K in keyof T]: T[K] extends string ? TLiteral<T[K]> : never;
};

function StringUnion<T extends string[]>(
  values: readonly [...T]
): TUnion<IntoStringUnion<T>> {
  return { type: "string", enum: values } as any;
}

export const CustomerSchema = Type.Object(
  {
    id: Type.String(),
    name: Type.String(),
    age: Type.Number(),
    role: StringUnion(roles),
  },
  { $id: "Customer", description: "A customer resource", title: "Customer" }
);

export type CustomerDto = Static<typeof CustomerSchema>;
