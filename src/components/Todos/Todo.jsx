import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai"

export default function Todo({
  todo,
  classname,
  handleToggle,
  deleteTodo,
  editTodo,
}) {
  return (
    <li className="flex items-center justify-between">
      <div className="cursor-pointer truncate" onClick={() => handleToggle(todo.id)}>
        <span className={`${classname} text-xl`}>{todo.text}</span>
      </div>
      <div>
        <button onClick={() => deleteTodo(todo.id)}>
          <IoTrashOutline className="text-3xl transition duration-500 ease-out hover:scale-110 "/>
        </button>
        <button onClick={() => editTodo(todo.id)}>
          <AiOutlineEdit className="text-3xl transition duration-500 ease-out hover:scale-110 "/>
        </button>
      </div>
    </li>
  );
}
