import { CONTADOR_NAMES } from "../constants/contadorNames";
import { useCounterContext } from "./useCounterContext";

export default function useShowCounter() {
  const { showPomodoro, setShowPomodoro } = useCounterContext();

  const cambiarContadorARenderizar = (name) => {
    if (name === CONTADOR_NAMES.POMODORO) {
      setShowPomodoro(true);
    }

    if (name === CONTADOR_NAMES.SHORT_BREAK) {
      setShowPomodoro(false);
    }
  };

  return { showPomodoro, cambiarContadorARenderizar };
}
