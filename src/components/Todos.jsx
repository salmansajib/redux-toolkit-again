import { useSelector } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todos/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <>
      <h2 className=' text-2xl font-semibold mt-5 mb-2 '>ToDos</h2>
      <ul className=' flex gap-2 flex-col '>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className=' bg-zinc-800  min-w-[300px] py-1 px-3 rounded  flex items-center justify-between '
          >
            <p className=' text-white text-lg '>{todo.text}</p>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className=' text-red-400 text-2xl cursor-pointer '
            >
              <MdDeleteForever />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
