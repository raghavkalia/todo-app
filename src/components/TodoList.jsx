import { useSelector } from "react-redux";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm;

    return todos.filter((todo) => {
      const matchedFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchedSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchedFilter && matchedSearch;
    });
  });

  console.log("Filter todo: ", filteredTodos);

  return <div>TodoList</div>;
};

export default TodoList;
