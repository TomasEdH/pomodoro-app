import CountersNav from "./components/CountersNav";
import Todo from "./components/Todos/Todo";
import "./App.css";
import EditTodoForm from "./components/Todos/EditTodoForm";
import PomodoroCounter from "./components/PomodoroCounter";
import ShortBreakCounter from "./components/ShortBreakCounter";
import useTodo from "./components/hooks/useTodo";
import {
  CounterProvider,
  useCounterContext,
} from "./components/hooks/useCounterContext";
import CreateTodoForm from "./components/Todos/CreateTodoForm";

function App() {
  const { todos, deleteTodo, editTodo, editTask, handleToggle } = useTodo();
  const { showPomodoro } = useCounterContext();

  return (
    <div className="absolute inset-0 -z-10 h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <main>
        <CountersNav />
        {showPomodoro ? <PomodoroCounter /> : <ShortBreakCounter />}
        <CreateTodoForm />
        {todos.map((todo, index) => {
          const classname = todo.completed ? "completed" : "";
          return todo.isEditing ? (
            <EditTodoForm key={index} task={todo} editTask={editTask} />
          ) : (
            <Todo
              todo={todo}
              key={index}
              classname={classname}
              handleToggle={handleToggle}
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
