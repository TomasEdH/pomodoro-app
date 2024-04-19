import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const useCounterContext = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {
    
  // estado para saber si se acabo un contador y sumar de a 1
  const [sumaContadoresFinalizados, setSumaContadoresFinalizados] = useState(0);
  const [sumaContadoresBreakFinalizados, setSumaContadoresBreakFinalizados] = useState(0);
  const [autoStart, setAutoStart] = useState(false);
  // estado para saber si se muestra el contador pomodoro o el short break
  const [showPomodoro, setShowPomodoro] = useState(true);
  const [isClickedFromNav, setIsClickedFromNav] = useState(false);

  const [minutosInicialesPomodoro, setMinutosInicialesPomodoro] = useState(25);
  const [minutosInicialesShortBreak, setMinutosInicialesShortBreak] = useState(5);
  const [showOptions, setShowOptions] = useState(false);

  const cambiarContadorARenderizar = (counter) => {
    if (counter === "Pomodoro") return setShowPomodoro(true);

    if (counter === "Short Break") return setShowPomodoro(false);
  };

  return (
    <CounterContext.Provider
      value={{showPomodoro, setShowPomodoro, cambiarContadorARenderizar, sumaContadoresFinalizados, setSumaContadoresFinalizados, sumaContadoresBreakFinalizados, setSumaContadoresBreakFinalizados, autoStart, setAutoStart, isClickedFromNav, setIsClickedFromNav, minutosInicialesPomodoro, setMinutosInicialesPomodoro, minutosInicialesShortBreak, setMinutosInicialesShortBreak, showOptions, setShowOptions}}
    >
      {children}
    </CounterContext.Provider>
  );
}
