import { useContext, createContext, useState, useEffect } from "react";


const TodosContext = createContext();

export const useTodosContext = () => useContext(TodosContext);

export const TodosProvider = ({ children }) => {

  const [value, setValue] = useState();
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  });

  useEffect(() => {
    // Guardar los todos en el almacenamiento local cada vez que cambien
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

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

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
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

    return (
        <TodosContext.Provider
        value={{
            value,
            setValue,
            todos,
            setTodos,
            addTodo,
            deleteTodo,
            editTodo,
            editTask,
            toggleComplete,
            handleSubmit,
        }}
        >
        {children}
        </TodosContext.Provider>
    );
};
