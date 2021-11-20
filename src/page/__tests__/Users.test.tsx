import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import * as React from "react";
import { Provider } from "react-redux";

import { server } from "@/mocks/server";
import { createStore } from "@/store/store";

import Users from "../Users";

const customRender = () => {
  const store = createStore();

  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(<Users />, { wrapper: Wrapper });
};

describe("Users", () => {
  it("should display error page when request for users has failed", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    customRender();
    const error = await screen.findByRole("alert", { name: /error page/i });
    expect(error).toBeInTheDocument();
  });

  it("should display error page when request for users has failed and should trigger another request after clicking refetch", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    customRender();
    const error = await screen.findByRole("alert", { name: /error page/i });
    expect(error).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: /refetch/i }));
    await screen.findByRole("img", {
      name: /loading/i,
    });
    await waitForElementToBeRemoved(() =>
      screen.queryByRole("img", {
        name: /loading/i,
      })
    );
    const error2 = await screen.findByRole("alert", { name: /error page/i });
    expect(error2).toBeInTheDocument();
  });

  it("should display loading indicator before displaying records", async () => {
    customRender();
    await screen.findByRole("img", {
      name: /loading/i,
    });
    await waitForElementToBeRemoved(
      () =>
        screen.queryByRole("img", {
          name: /loading/i,
        }),
      { timeout: 2000 }
    );
    expect(screen.queryAllByRole("listitem")).toHaveLength(10);
  });
});
