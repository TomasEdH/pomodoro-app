import useTemporizador from "./hooks/useCountDown";
import FormatCounter from "./FormatCounter";
import { useEffect } from "react";
import { useCounterContext } from "./hooks/useCounterContext";
import { MdPlayArrow } from "react-icons/md";
import { MdOutlineReplay } from "react-icons/md";
import ShowOptionsButton from "./ShowOptionsButton";
import ShowOptions from "./ShowOptions";

export default function PomodoroCounter() {
  const {
    sumaContadoresFinalizados,
    setSumaContadoresFinalizados,
    setShowPomodoro,
    minutosInicialesPomodoro,
    showOptions
  } = useCounterContext();

  const {
    minutos,
    segundos,
    iniciar,
    alerta,
    setAlerta,
    handleIniciar,
    handleReiniciar,
    setIniciar,
  } = useTemporizador(minutosInicialesPomodoro, 0);

  useEffect(() => {
    if (iniciar && minutos === 0 && segundos === 0) {
      setSumaContadoresFinalizados(sumaContadoresFinalizados + 1);
      setIniciar(false);
      setAlerta(true);
      setShowPomodoro(false);
    }
  }, [
    iniciar,
    minutos,
    segundos,
    sumaContadoresFinalizados,
    setSumaContadoresFinalizados,
    setIniciar,
    setAlerta,
  ]);

  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-[550px] w-[80%]">
      <ShowOptionsButton />
      <div>
        <FormatCounter minutos={minutosInicialesPomodoro} segundos={segundos} />
      </div>

      {!iniciar ? (
        <button onClick={() => handleIniciar(minutosInicialesPomodoro)}>
          <MdPlayArrow className="w-10 h-10" />
        </button>
      ) : (
        <div>
          <button
            onClick={() => handleReiniciar(minutosInicialesPomodoro, false)}
          >
            <MdOutlineReplay className="w-10 h-10" />
          </button>
        </div>
      )}
      {alerta && <h2>¡Cuidado! El tiempo se acabó</h2>}

      <section className="flex flex-col items-center gap-2 mt-10">
        <h3>Pomodoros completados: {sumaContadoresFinalizados}</h3>
        <h3 className="text-xl">¡A SEGUIR TRABAJANDO!</h3>
      </section>
      {showOptions && <ShowOptions/>}
    </div>
  );
}
