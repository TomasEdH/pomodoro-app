export default function Todo({ todo, classname, handleToggle, deleteTodo, editTodo }) {
  return (
    <div className="">
      <div onClick={() => handleToggle(todo.id)}>
        <p className={classname}>{todo.text}</p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
      <button onClick={() => editTodo(todo.id)}>Editar</button>
    </div>
  );
}
