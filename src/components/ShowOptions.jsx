import { useCounterContext } from "./hooks/useCounterContext";
import useTemporizador  from "./hooks/useCountDown";

export default function ShowOptions() {

    const { handleReiniciar } = useTemporizador();

    const {
      setMinutosInicialesPomodoro,
      setMinutosInicialesShortBreak,
      minutosInicialesPomodoro,
      minutosInicialesShortBreak,
    } = useCounterContext();
  
    const handleChangeTiempo = (e) => {
      const value = parseInt(e.target.value);
      if(!isNaN(value) && value >= 0 && value <= 90) {
        setMinutosInicialesPomodoro(parseInt(e.target.value));
        handleReiniciar(parseInt(e.target.value), 0);
      } else {
        setMinutosInicialesPomodoro(1);
      }
    };
  
    const handleChangeTiempoShortBreak = (e) => {
      const value = parseInt(e.target.value);
      if(!isNaN(value) && value > 0 && value <= 90) {
        setMinutosInicialesShortBreak(parseInt(e.target.value));
        handleReiniciar(parseInt(e.target.value), 0);
      } else {
        setMinutosInicialesShortBreak(1);
      }
    };

    return(
        <div>
            <input
                type="text"
                max={90}
                value={minutosInicialesPomodoro}
                onChange={handleChangeTiempo}
            />
            <input
                type="text"
                value={minutosInicialesShortBreak}
                onChange={handleChangeTiempoShortBreak}
            />
        </div>
    )
}