import CountersNav from "./components/CountersNav";
import sound from "./assets/alert.mp3";
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
import { useTodosContext } from "./components/hooks/useTodosContext";
import { TodosProvider } from "./components/hooks/useTodosContext";
import Footer from "./components/Footer";
import ShowOptions from "./components/ShowOptions";

function App() {
  const { showPomodoro, showOptions, showTodos, alerta } = useCounterContext();
  const {
    value,
    setValue,
    todos,
    deleteTodo,
    editTodo,
    toggleComplete,
    editTask,
    handleSubmit,
  } = useTodosContext();

  console.log("alerta", alerta);

  const bgColorClass = showPomodoro ? "bg-black text-white" : "bg-white";
  const alertAudio = new window.Audio(sound);

  if (alerta) {
    alertAudio.play();
  }

  return (
    <div
      className={`transition-colors duration-500 ${bgColorClass} w-full min-h-screen`}
    >
      <main>
        <CountersNav />
        <div className="flex flex-col w-full justify-center items-center mt-10">
          {showPomodoro ? <PomodoroCounter /> : <ShortBreakCounter />}
          <div className="flex items-start justify-center gap-6 w-full">
            {showOptions && <ShowOptions />}
            {showTodos && (
              <div
                className={`flex flex-col p-12 border h-full min-w-[35%] mt-5 ${
                  showPomodoro ? "border-white" : "border-black"
                } rounded-md`}
              >
                <CreateTodoForm
                  value={value}
                  setValue={setValue}
                  handleSubmit={handleSubmit}
                />
                <ul className="flex flex-col max-w-[80%]">
                  {todos.map((todo, index) => {
                    const classname = todo.completed ? "completed" : "";
                    return todo.isEditing ? (
                      <EditTodoForm
                        key={index}
                        task={todo}
                        editTask={editTask}
                      />
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
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer className={bgColorClass} />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <TodosProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </TodosProvider>
  );
}
