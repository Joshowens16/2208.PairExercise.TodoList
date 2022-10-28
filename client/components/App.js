import React, { useEffect } from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
import Todos from "./Todos";
import CreateTodo from "./CreateTodo";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../store/todosSlice";
import EditTodo from "./EditTodo";
import axios from "axios";

const App = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const fetchTodos = async () => {
    const { data: todos } = await axios.get("/api/todos");
    dispatch(setTodos(todos));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="main">
      <h1>
        <Link to="/">Todos ({todos.length})</Link>
      </h1>
      <Link to="/todos/create">Create A New Todo</Link>
      <Routes>
        <Route path="/todos/create" element={<CreateTodo />} />
        <Route path="/todos/:id" element={<EditTodo />} />
        <Route path="/" element={<Todos />} />
      </Routes>
    </div>
  );
};

export default App;
