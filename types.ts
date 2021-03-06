/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/customers/": {
    /** Lists all customers */
    get: {
      responses: {
        /** Default Response */
        200: {
          content: {
            "application/json": {
              id: string;
              name: string;
              age: number;
              /** @enum {undefined} */
              role: "intern" | "employee";
            }[];
          };
        };
      };
    };
  };
  "/customers/paged": {
    get: {
      responses: {
        /** Default Response */
        200: {
          content: {
            "application/json": {
              page: number;
              pageSize: number;
              total: number;
              items: components["schemas"]["Customer"][];
            };
          };
        };
      };
    };
  };
}

export interface components {
  schemas: {
    /**
     * Customer
     * @description A customer resource
     */
    Customer: {
      id: string;
      name: string;
      age: number;
      /** @enum {undefined} */
      role: "intern" | "employee";
    };
  };
}

export interface operations {}

export interface external {}
