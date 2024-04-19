import { useState } from "react";

export default function EditTodoForm({ task, editTask }) {
  const [value, setValue] = useState(task.text)

  const handleSubmit = (e) => {
    e.preventDefault()
    editTask(value, task.id)

    setValue("")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button type="submit">Actualizar tarea</button>
      </form>
    </div>
  );
}
