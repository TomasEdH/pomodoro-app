import { useEffect, useState } from "react";
import { useCounterContext } from "./hooks/useCounterContext";
import ShowOptionsButton from "./ShowOptionsButton";
import FormatCounter from "./FormatCounter";
import { MdPlayArrow } from "react-icons/md";
import { MdOutlineReplay } from "react-icons/md";
import Completitions from "./Completitions";

export default function ShortBreakCounter() {
  const {
    setSumaContadoresBreakFinalizados,
    setShowPomodoro,
    showPomodoro,
    isClickedFromNav,
    setIsClickedFromNav,
    handleReiniciar,
  } = useCounterContext();

  const {
    minutosShortBreak,
    segundosShortBreak,
    iniciarShortBreak,
    iniciar,
    alerta,
    handleIniciarShortBreak,
  } = useCounterContext();

  const [minutosComponente, setMinutosComponente] = useState(minutosShortBreak);
  const [segundosComponente, setSegundosComponente] =
    useState(segundosShortBreak);

  useEffect(() => {
    setMinutosComponente(minutosShortBreak);
    setSegundosComponente(segundosShortBreak);
  }, [minutosShortBreak, segundosShortBreak]);

  useEffect(() => {
    if (
      iniciarShortBreak &&
      minutosShortBreak === 0 &&
      segundosShortBreak === 0
    ) {
      setSumaContadoresBreakFinalizados((prev) => prev + 1);
      setShowPomodoro(true);
      handleReiniciar()
    }

    if (!showPomodoro && !isClickedFromNav) {
      handleIniciarShortBreak();
      setIsClickedFromNav(true);
    }
  }, [
    iniciarShortBreak,
    minutosShortBreak,
    segundosShortBreak,
    setSumaContadoresBreakFinalizados,
    handleIniciarShortBreak,
    setShowPomodoro,
    showPomodoro,
    isClickedFromNav,
    setIsClickedFromNav,
    handleReiniciar,
  ]);

  return (
    <div className={`flex flex-col items-center justify-center min-h-[550px] w-[80%]`}>
      <ShowOptionsButton />

      <div>
        <FormatCounter
          minutos={minutosComponente}
          segundos={segundosComponente}
        />
      </div>

      {!iniciarShortBreak ? (
        <button onClick={handleIniciarShortBreak} disabled={iniciar}>
          <MdPlayArrow
            className={`w-10 h-10 ${
              iniciar ? "text-gray-500 cursor-default" : ""
            }`}
          />
        </button>
      ) : (
        <div>
          <button onClick={handleReiniciar}>
            <MdOutlineReplay className="w-10 h-10" />
          </button>
        </div>
      )}

      {alerta && <div>¡Tiempo terminado!</div>}

      <Completitions/>
    </div>
  );
}
