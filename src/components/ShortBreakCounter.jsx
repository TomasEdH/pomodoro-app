import useTemporizador from "./hooks/useCountDown";
import FormatCounter from "./FormatCounter";
import { useEffect } from "react";
import { useCounterContext } from "./hooks/useCounterContext";
import ShowOptionsButton from "./ShowOptionsButton";
import ShowOptions from "./ShowOptions";

export default function ShortBreakCounter() {

  const {
    sumaContadoresBreakFinalizados,
    setSumaContadoresBreakFinalizados,
    setShowPomodoro,
    showPomodoro,
    isClickedFromNav,
    setIsClickedFromNav,
    minutosInicialesShortBreak,
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
  } = useTemporizador(minutosInicialesShortBreak, 0);

  useEffect(() => {
    if (iniciar && minutos === 0 && segundos === 0) {
      setSumaContadoresBreakFinalizados(sumaContadoresBreakFinalizados + 1);
      setIniciar(false);
      setAlerta(true);
      setShowPomodoro(true);
    }

    if (!showPomodoro && !isClickedFromNav) {
      handleIniciar(minutosInicialesShortBreak);
      setIsClickedFromNav(true);
    }
  }, [
    iniciar,
    minutos,
    segundos,
    sumaContadoresBreakFinalizados,
    isClickedFromNav,
  ]);


  return (
    <div className=" flex flex-col items-center justify-center bg-white min-h-[550px] w-[80%]">
      <ShowOptionsButton/>
      <div>
        <FormatCounter
          minutos={minutosInicialesShortBreak}
          segundos={segundos}
        />
      </div>

      {!iniciar ? (
        <button
          onClick={() => {
            handleIniciar(minutosInicialesShortBreak);
          }}
        >
          Iniciar
        </button>
      ) : (
        <div>
          <button
            onClick={() => {
              handleReiniciar(minutosInicialesShortBreak, false);
            }}
          >
            Reiniciar
          </button>
        </div>
      )}

      {alerta && <div>¡Tiempo terminado!</div>}
      <section className="flex flex-col items-center gap-2 mt-10">
        <h3>Descansos completados: {sumaContadoresBreakFinalizados}</h3>
        <h3 className="text-xl">Tomate un descanso y vuelve a la acción</h3>
      </section>
      {showOptions && <ShowOptions/>}
    </div>
  );
}
