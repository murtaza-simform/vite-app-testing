import { http, HttpResponse } from "msw";

export const handlers = [
  // GET request handler
  http.get("https://dummyjson.com/todos", () => {
    return HttpResponse.json(
      {
        todos: [
          {
            id: 1,
            todo: "Do something nice for someone I care about",
            completed: true,
            userId: 26,
          },
          {
            id: 2,
            todo: "Read a book",
            completed: false,
            userId: 5,
          },
        ],
      },
      { status: 200 }
    );
  }),

  // POST request handler
  // http.post("https://dummyjson.com/todos", (req) => {
  //   const newTodo = req.request.body;
  //   return HttpResponse.json(
  //     {
  //       message: "Todo created successfully",
  //       todo: newTodo,
  //     },
  //     { status: 201 }
  //   );
  // }),

  // PUT request handler
  // http.put("https://dummyjson.com/todos/:id", (req) => {
  //   const { id } = req.params;
  //   const updatedTodo = req.request.body;
  //   return HttpResponse.json(
  //     {
  //       message: "Todo updated successfully",
  //       todo: { id, ...updatedTodo },
  //     },
  //     { status: 200 }
  //   );
  // }),

  // DELETE request handler
  // http.delete("https://dummyjson.com/todos/:id", (req) => {
  //   const { id } = req.params;
  //   return HttpResponse.json(
  //     {
  //       message: `Todo with id ${id} deleted successfully`,
  //     },
  //     { status: 200 }
  //   );
  // }),
];
