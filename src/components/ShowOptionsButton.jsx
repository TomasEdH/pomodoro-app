import { BiSolidEdit } from "react-icons/bi";
import { useCounterContext } from "./hooks/useCounterContext";

export default function ShowOptionsButton() {
  const { showOptions, setShowOptions } = useCounterContext();

  return(
    <div>
      {!showOptions && (
        <button onClick={() => setShowOptions(!showOptions)}>
          <BiSolidEdit className="w-10 h-10 text-blue-500" />
        </button>
      )}
      {showOptions && (
        <button onClick={() => setShowOptions(!showOptions)}>
          <BiSolidEdit className="w-10 h-10 text-green-700" />
        </button>
      )}
    </div>
  );
 
    
}
