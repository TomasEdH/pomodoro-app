import { BiSolidEdit } from "react-icons/bi";
import { PiNotebook } from "react-icons/pi";
import { useCounterContext } from "./hooks/useCounterContext";

export default function ShowOptionsButton() {
  const { showOptions, setShowOptions, showTodos, setShowTodos, showPomodoro } = useCounterContext();

  return(
    <div>
      {!showOptions && (
        <button onClick={() => setShowOptions(!showOptions)}>
          <BiSolidEdit className={`w-10 h-10 transition duration-500 ease-out hover:scale-110  ${showPomodoro ? 'text-white' : ''}`}/>
        </button>
      )}
      {showOptions && (
        <button onClick={() => setShowOptions(!showOptions)}>
          <BiSolidEdit className={`w-10 h-10 transition duration-500 ease-out hover:scale-110  ${showPomodoro ? 'text-blue-700' : ''}`}/>
        </button>
      )}
      {showTodos && (
        <button onClick={() => setShowTodos(!showTodos)}>
          <PiNotebook className={`w-10 h-10 transition duration-500 ease-out hover:scale-110  ${showPomodoro ? 'text-blue-700' : ''}`}/>
        </button>
      )}
      {!showTodos && (
        <button onClick={() => setShowTodos(!showTodos)}>
          <PiNotebook className={`w-10 h-10 transition duration-500 ease-out hover:scale-110  ${showPomodoro ? 'text-white' : ''}`} />
        </button>
      )}
    </div>
  );
 
    
}
