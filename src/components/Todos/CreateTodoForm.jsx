import { useTodosContext } from "../hooks/useTodosContext";


export default function CreateTodoForm() {

  const { handleSubmit, setValue, value } = useTodosContext()
  return (
    <div>
      <h3 className="uppercase">Administra aquí tus tareas</h3>

      <form onSubmit={handleSubmit} className="flex py-10">
        <input
         className="border-2 border-black border-r-0 rounded-md rounded-r-none p-2"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="¿Que quieres hacer?"
        />
        <button className="bg-purple-600 rounded-md rounded-l-none px-2 border-2 border-black border-l-0" type="submit">Añadir</button>
      </form>
    </div>
  );
}
