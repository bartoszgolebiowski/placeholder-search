import { beforeAll, afterEach, afterAll } from "vitest";

import "whatwg-fetch";

import { server } from "./mocks/server";

beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
