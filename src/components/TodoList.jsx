// import { useSelector } from "react-redux";

// const TodoList = () => {
//   const filteredTodos = useSelector((state) => {
//     const todos = state.todos;
//     const filter = state.filter;
//     const searchTerm = state.searchTerm.toLowerCase();

//     return todos.filter((todo) => {
//       const matchedFilter =
//         (filter === "COMPLETED" && todo.completed) ||
//         (filter === "INCOMPLETE" && !todo.completed) ||
//         filter === "ALL";

//       const matchedSearch = todo.text.toLowerCase().includes(searchTerm);

//       return matchedFilter && matchedSearch;
//     });
//   });

//   console.log("Filter todo: ", filteredTodos);

//   return <div>TodoList</div>;
// };

// export default TodoList;

import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";
//import TodoItem from "./TodoItem";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  console.log("Filtered Todos:", filteredTodos);

  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodos.map((todo, index) => (
        <TodoItems key={index} todo={todo} index={index} />
      ))}
    </ul>
    // <ul>
    //   <li className="my-2 text-sm italic">All your notes here... </li>
    //   {filteredTodos.map((todo, index) => (
    //     // <li key={index}>{todo.text}</li>
    //     <TodoItems key={index} todo={todo} index={index} />
    //   ))}
    // </ul>
  );
};

export default TodoList;
