import "./components/blue.css";
import React from "react";
import { ReactDOM } from "react-dom/client";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
