import { useState } from "react";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodoFromAPI = async () => {
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      setTodos(data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-2 ">
        <button className="btn" onClick={() => fetchTodoFromAPI()}>
          Fetch Todo
        </button>
        <button className="btn" onClick={() => resetTodos()}>
          Reset
        </button>
      </div>
      {todos && todos.length > 0 && (
        <>
          <h2 data-testid="heading">Todo List</h2>
          {todos?.map((todo: Todo) => {
            return (
              <>
                <h4>
                  {todo?.id}
                  {". "}
                  {todo?.todo}
                </h4>
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default TodoList;
