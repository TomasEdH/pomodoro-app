export default function FormatCounter({ minutos, segundos }) {
  
  const isHour = minutos >= 60 ? true : false;

  return (
    <section className="flex gap-6">
      <div>
        <h2 className="text-[8rem]">
          {isHour ? `${Math.floor(minutos / 60)}:` : ""}
          {minutos % 60 < 10 ? `0${minutos % 60}` : minutos % 60}
          :{segundos < 10 ? `0${segundos}` : segundos}
        </h2>
      </div>
    </section>
  );
}
