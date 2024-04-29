import { useCounterContext } from "./hooks/useCounterContext";
import { MdOutlineReplay } from "react-icons/md";

export default function RestartSumCounters() {
  const {
    setSumaContadoresFinalizados,
    setSumaContadoresBreakFinalizados,
    showPomodoro,
  } = useCounterContext();

  const handleRestartSumCounters = () => {
    setSumaContadoresFinalizados(0);
  };

  const handleRestartSumBreakCounters = () => {
    setSumaContadoresBreakFinalizados(0);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      {showPomodoro && (
        <button onClick={handleRestartSumCounters} className="btn">
          <MdOutlineReplay className="w-6 h-6" />
        </button>
      )}
      {!showPomodoro && (
        <button onClick={handleRestartSumBreakCounters} className="btn">
          <MdOutlineReplay className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
