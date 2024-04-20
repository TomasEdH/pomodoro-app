import { useState } from "react";

export default function useTodo(){
  const [value, setValue] = useState();
  const [todos, setTodos] = useState([]);


  const addTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: value,
      completed: false,
      isEditing: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEditing: !todo.isEditing,
          };
        }
        return todo;
      })
    );
  };

  const editTask = (value, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text: value,
            isEditing: !todo.isEditing,
          };
        }
        return todo;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return {
    value,
    setValue,
    todos,
    setTodos,
    addTodo,
    deleteTodo,
    editTodo,
    editTask,
    handleSubmit,
  }
}