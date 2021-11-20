import { rest } from "msw";

import { users } from "./placeholder";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(users));
  }),
];
