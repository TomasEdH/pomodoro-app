import CountersNav from "./components/CountersNav";
import Todo from "./components/Todos/Todo";
import "./App.css";
import EditTodoForm from "./components/Todos/EditTodoForm";
import PomodoroCounter from "./components/PomodoroCounter";
import ShortBreakCounter from "./components/ShortBreakCounter";
import {
  CounterProvider,
  useCounterContext,
} from "./components/hooks/useCounterContext";
import CreateTodoForm from "./components/Todos/CreateTodoForm";
import { useState } from "react";

function App() {
  const { showPomodoro } = useCounterContext();

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

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

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
    <div className="absolute inset-0 -z-10 h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <main>
        <CountersNav />
        {showPomodoro ? <PomodoroCounter /> : <ShortBreakCounter />}
        <CreateTodoForm value={value} setValue={setValue} handleSubmit={handleSubmit} />
        {todos.map((todo, index) => {
          const classname = todo.completed ? "completed" : "";
          return todo.isEditing ? (
            <EditTodoForm key={index} task={todo} editTask={editTask} />
          ) : (
            <Todo
              todo={todo}
              key={index}
              classname={classname}
              handleToggle={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </main>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <CounterProvider>
      <App />
    </CounterProvider>
  );
}
