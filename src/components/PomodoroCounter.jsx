import { useEffect, useState } from "react";
import { useCounterContext } from "./hooks/useCounterContext";
import { MdPlayArrow, MdOutlineReplay } from "react-icons/md";
import ShowOptionsButton from "./ShowOptionsButton";
import FormatCounter from "./FormatCounter";
import Completitions from "./Completitions";

export default function PomodoroCounter() {
  const {
    setSumaContadoresFinalizados,
    segundos,
    iniciar,
    alerta,
    setAlerta,
    handleIniciar,
    handleReiniciar,
    handleDetener,
    setShowPomodoro,
    minutos,
  } = useCounterContext();

  const [minutosComponente, setMinutosComponente] = useState(minutos);

  useEffect(() => {
    if (iniciar && minutos === 0 && segundos === 0) {
      setSumaContadoresFinalizados((prev) => prev + 1);
      setShowPomodoro(false);
      setAlerta(true);
      handleReiniciar();
    }
  }, [
    iniciar,
    minutos,
    segundos,
    setSumaContadoresFinalizados,
    handleDetener,
    setShowPomodoro,
    handleReiniciar,
    setAlerta,
  ]);

  useEffect(() => {
    setMinutosComponente(minutos);
  }, [minutos]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[550px] w-[80%]">
      <ShowOptionsButton />
      <div>
        <FormatCounter minutos={minutosComponente} segundos={segundos} />
      </div>

      {!iniciar ? (
        <button onClick={handleIniciar}>
          <MdPlayArrow className="w-10 h-10" />
        </button>
      ) : (
        <div>
          <button onClick={handleReiniciar}>
            <MdOutlineReplay className="w-10 h-10" />
          </button>
        </div>
      )}

      {alerta && <h2>¡Cuidado! El tiempo se acabó</h2>}

      <Completitions />
  
    </div>
  );
}
