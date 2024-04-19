import { useCounterContext } from "./hooks/useCounterContext";
import { useState } from "react";
import { SlClock } from "react-icons/sl";
import { buttons } from "../utils/consts";

export default function CountersNav() {
  const {
    cambiarContadorARenderizar,
    setIsClickedFromNav,
    isClickedFromNav,
  } = useCounterContext();

  const [active, setActive] = useState();

  const handleClick = (button) => {
    setIsClickedFromNav(!isClickedFromNav);
    cambiarContadorARenderizar(button.id);
    setActive(button.id);
  };

  const classNameActive = "text-white bg-blue-500";
  
  return (
    <section className="flex justify-around w-full mt-12 mb-3">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => {
            handleClick(button);
          }}
          className={active === button.id ? classNameActive : ""}
        >
          {button.counterName}
        </button>
      ))}
    </section>
  );
}
