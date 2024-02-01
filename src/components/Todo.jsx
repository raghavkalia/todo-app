import { FaFileCirclePlus } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

const Todo = () => {
  const dispatch = useDispatch();
  const [todoTxt, setTodoTxt] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const addTodoClickHandler = () => {
    if (todoTxt.trim() !== "") {
      handleAddTodo(todoTxt.trim());
      setTodoTxt("");
    }
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        PERSONAL TODO APP
      </h2>
      {/* input text and button */}
      <div className="flex items-center mb-4">
        <input
          value={todoTxt}
          onChange={(e) => setTodoTxt(e.target.value)}
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={addTodoClickHandler}
        >
          <FaFileCirclePlus />
        </button>
      </div>
      {/* filter and search */}
      <div className="flex items-center justify-between">
        <FilterButton />
        <div className="flex items-center mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            name="addTodoInput"
            id="addTodoInput"
            placeholder="Search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <FaSearchPlus />
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default Todo;
