export const roles = ["intern", "employee"] as const;
export type Role = typeof roles[number];

// export enum Role {
//   INTERN = "intern",
//   EMPLOYEE = "employee",
// }

export interface Customer {
  id: string;
  name: string;
  age: number;
  role: Role;
}

export const getCustomers = (): Customer[] => {
  return [
    {
      id: "abc",
      age: 18,
      name: "Jos",
      role: "intern",
    },
    {
      id: "xyz",
      age: 23,
      name: "Tim",
      role: "employee",
    },
  ];
};
