import { useCounterContext } from "./hooks/useCounterContext";
import { useState } from "react";
import { CONTADOR_NAMES, buttons } from "../utils/consts";
import { useEffect } from "react";

export default function CountersNav() {
  const {
    showPomodoro,
    cambiarContadorARenderizar,
    setIsClickedFromNav,
    isClickedFromNav,
  } = useCounterContext();

  const [active, setActive] = useState(CONTADOR_NAMES)

  const handleClick = (button) => {
    setIsClickedFromNav(!isClickedFromNav);
    cambiarContadorARenderizar(button.id);
    setActive(button.id);
  };

  const classNameActive = showPomodoro ? 'border-2 border-white' : " border-2 border-black";

  useEffect(() => {
    // cambiamos el boton activo automaticamente cuando showPomodoro cambie
    setActive(showPomodoro ? CONTADOR_NAMES.POMODORO : CONTADOR_NAMES.SHORT_BREAK);
  }, [showPomodoro]);
  
  return (
    <section className="flex justify-around w-full mt-12 mb-3">
      {buttons.map((button) => (
        <button
          key={button.id}
          disabled={active === button.id}
          onClick={() => {
            handleClick(button);
          }}
          className={`${active === button.id ? classNameActive : ""} p-3`}
        >
          {button.counterName}
        </button>
      ))}
    </section>
  );
}
