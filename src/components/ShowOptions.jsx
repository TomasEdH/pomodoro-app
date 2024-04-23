import { useCounterContext } from "./hooks/useCounterContext";

export default function ShowOptions() {
  const { handleReiniciar, showPomodoro } = useCounterContext();

  const {
    setMinutosInicialesPomodoro,
    setMinutosInicialesShortBreak,
    minutosInicialesPomodoro,
    minutosInicialesShortBreak,
  } = useCounterContext();

  const handleChangeTiempo = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 90) {
      setMinutosInicialesPomodoro(value);
      handleReiniciar();
    } else {
      setMinutosInicialesPomodoro(1);
    }
  };

  const handleChangeTiempoShortBreak = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 90) {
      setMinutosInicialesShortBreak(value);
      handleReiniciar();
    } else {
      setMinutosInicialesShortBreak(1);
    }
  };

  return (
    <form className={`flex flex-col p-12 border ${showPomodoro ? 'border-white' : 'border-black'} max-w-[50%] mt-5 gap-2`}>
      <h3 className="uppercase mb-8">Personaliza los contadores</h3>
      <label>Minutos Pomodoro</label>
      <input
        className="text-black border-2 border-black rounded-md p-2"
        type="text"
        value={minutosInicialesPomodoro}
        onChange={handleChangeTiempo}
      />
      <label>Minutos Break</label>
      <input
        className="text-black border-2 border-black rounded-md p-2"
        type="text"
        value={minutosInicialesShortBreak}
        onChange={handleChangeTiempoShortBreak}
      />
    </form>
  );
}
