import { useCounterContext } from "./hooks/useCounterContext";
import RestartSumCounters from "./RestartSumCounters";

export default function Completitions() {
  const {
    sumaContadoresBreakFinalizados,
    sumaContadoresFinalizados,
    showPomodoro,
  } = useCounterContext();

  return (
    <div>
      {showPomodoro ? (
        <section className="flex flex-col items-center gap-2 mt-10">
          <h3>Pomodoros completados: {sumaContadoresFinalizados}</h3>
          <RestartSumCounters/>
          <h3 className="text-xl">¡A SEGUIR TRABAJANDO!</h3>
        </section>
      ) : (
        <section className="flex flex-col items-center gap-2 mt-10">
          <h3>Descansos completados: {sumaContadoresBreakFinalizados}</h3>
          <RestartSumCounters/>
         <h3 className="text-xl">Tomate un descanso y vuelve a la acción</h3>
        </section>
      )}
    </div>
  );
}
