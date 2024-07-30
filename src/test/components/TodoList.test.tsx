import { http, HttpResponse } from "msw";
import TodoList from "../../components/TodoList";
import { render, screen, userEvent, waitFor } from "../../utils/test-utils";
import { server } from "../mocks/server";

describe("TodoList", () => {
  it("should not render TodoList until button is clicked", () => {
    render(<TodoList />);

    const heading = screen.queryByTestId("heading");
    expect(heading).not.toBeInTheDocument();
  });

  it("should render TodoList when fetch todo button is clicked", async () => {
    render(<TodoList />);

    const button = screen.getByRole("button", { name: /Fetch Todo/ });

    const user = userEvent.setup();
    await user.click(button);

    await waitFor(() => {
      const heading = screen.queryByTestId("heading");
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(/Todo List/);
    });
  });

  it("should reset TodoList when reset button is clicked", async () => {
    render(<TodoList />);

    const button = screen.getByRole("button", { name: /Reset/ });

    const user = userEvent.setup();
    await user.click(button);

    await waitFor(() => {
      const heading = screen.queryByTestId("heading");
      expect(heading).not.toBeInTheDocument();
    });
  });

  it("should not render TodoList when there is error in API", async () => {
    render(<TodoList />);

    server.use(
      http.get("https://dummyjson.com/todos", () => {
        return new HttpResponse(null, { status: 401 });
      })
    );

    await waitFor(() => {
      const heading = screen.queryByTestId("heading");
      expect(heading).not.toBeInTheDocument();
    });
  });
});
