import { createContext, useContext, useState, useEffect } from "react";
import { CONTADOR_NAMES } from "../../utils/consts";

const CounterContext = createContext();

export const useCounterContext = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {

/*   const [minutos, setMinutos] = useState(() => {
  const minutosLocalStorage = localStorage.getItem('minutos')
    console.log('minutosLocalStorage: ', minutosLocalStorage)
    return parseInt(minutosLocalStorage) ? minutosLocalStorage : 25 
  }); */
/*   const [minutosShortBreak, setMinutosShortBreak] = useState(() => {
    // Obtener el valor de minutosShortBreak del localStorage, si existe, de lo contrario, establecer el valor predeterminado (5)
    const minutosShortBreakLocalStorage = localStorage.getItem('minutosShortBreak');
    return minutosShortBreakLocalStorage ? parseInt(minutosShortBreakLocalStorage) : 5;
  }); */
  const [minutos, setMinutos] = useState(25);
  const [minutosShortBreak, setMinutosShortBreak] = useState(5);
  const [segundosShortBreak, setSegundosShortBreak] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [iniciar, setIniciar] = useState(false);
  const [iniciarShortBreak, setIniciarShortBreak] = useState(false);
  const [alerta, setAlerta] = useState(false);

  // aquí van los estados del contexto
  const [showPomodoro, setShowPomodoro] = useState(true);
  const [isClickedFromNav, setIsClickedFromNav] = useState(false);
  const [minutosInicialesPomodoro, setMinutosInicialesPomodoro] = useState(25);
  const [minutosInicialesShortBreak, setMinutosInicialesShortBreak] =
    useState(5);
  const [showOptions, setShowOptions] = useState(false);
  const [showTodos, setShowTodos] = useState(false);
  const [sumaContadoresBreakFinalizados, setSumaContadoresBreakFinalizados] = useState(0);
  const [sumaContadoresFinalizados, setSumaContadoresFinalizados] = useState(0);

  const handleIniciar = () => {
    setIniciar(true);
    setIniciarShortBreak(false);
    setMinutosShortBreak(minutosInicialesShortBreak);
    setSegundosShortBreak(0);
  };

  const handleIniciarShortBreak = () => {
    setIniciarShortBreak(true);
    setIniciar(false);
    setMinutos(minutosInicialesPomodoro);
    setSegundos(0);
  };


  useEffect(() => {
    let timer;
    if (iniciar) {
      timer = setInterval(() => {
        if (segundos === 0) {
          if (minutos === 0) {
            setAlerta(true);
            setMinutos(minutosInicialesPomodoro);
            clearInterval(timer);
          } else {
            setMinutos((prevMinutos) => prevMinutos - 1);
            setSegundos(59);
          }
        } else {
          setSegundos((prevSegundos) => prevSegundos - 1);
        }
      }, 100);
    }
    return () => clearInterval(timer);
  }, [iniciar, minutos, segundos, minutosInicialesPomodoro]);

  useEffect(() => {
    let timer;
    if (iniciarShortBreak) {
      timer = setInterval(() => {
        if (segundosShortBreak === 0) {
          if (minutosShortBreak === 0) {
            setMinutosShortBreak(minutosInicialesShortBreak);
            setAlerta(true);
            clearInterval(timer);
          } else {
            setMinutosShortBreak((prevMinutos) => prevMinutos - 1);
            setSegundosShortBreak(59);
          }
        } else {
          setSegundosShortBreak((prevSegundos) => prevSegundos - 1);
        }
      }, 100);
    }
    
    return () => clearInterval(timer);
  }, [iniciarShortBreak, minutosShortBreak, segundosShortBreak, minutosInicialesShortBreak]);
  
  useEffect(() => {
    if (showPomodoro) {
      setMinutos(minutos);
    } else {
      setMinutosShortBreak(minutosShortBreak);
    }
  }, [
    showPomodoro,
    minutos,
    minutosShortBreak,
  ]);
  
  useEffect(() => {
    setMinutos(minutosInicialesPomodoro);
    setMinutosShortBreak(minutosInicialesShortBreak);
/*     localStorage.setItem('minutos', minutos);
    localStorage.setItem('minutosShortBreak', minutosShortBreak); */
  }, [minutosInicialesPomodoro, minutosInicialesShortBreak])



  const handleReiniciar = () => {
    setIniciar(false);
    setMinutos(minutosInicialesPomodoro)
    setSegundos(0)
    setMinutosShortBreak(minutosInicialesShortBreak);
    setSegundosShortBreak(0);
    setIniciarShortBreak(false);
    setAlerta(false);
  };

  console.log('showPomodoro: ', showPomodoro)
  const cambiarContadorARenderizar = (counter) => {
    if (counter === CONTADOR_NAMES.POMODORO) return setShowPomodoro(true);

    if (counter === CONTADOR_NAMES.SHORT_BREAK) return setShowPomodoro(false);
  };

  return (
    <CounterContext.Provider
      value={{
        showPomodoro,
        setShowPomodoro,
        cambiarContadorARenderizar,
        setSumaContadoresFinalizados,
        setSumaContadoresBreakFinalizados,
        isClickedFromNav,
        setIsClickedFromNav,
        minutosInicialesPomodoro,
        setMinutosInicialesPomodoro,
        minutosInicialesShortBreak,
        setMinutosInicialesShortBreak,
        showOptions,
        setShowOptions,
        showTodos,
        setShowTodos,
        minutos,
        setMinutos,
        segundos,
        iniciar,
        alerta,
        handleIniciar,
        minutosShortBreak,
        setMinutosShortBreak,
        iniciarShortBreak,
        handleIniciarShortBreak,
        handleReiniciar,
        segundosShortBreak,
        setSegundosShortBreak,
        sumaContadoresBreakFinalizados,
        sumaContadoresFinalizados,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
