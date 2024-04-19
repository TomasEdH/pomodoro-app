import { useState } from "react";

const CONTADOR_NAMES = {
  POMODORO: "Pomodoro",
  SHORT_BREAK: "Short Break",
};

export default function useShowCounter() {
  const [showPomodoro, setShowPomodoro] = useState(false);

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
