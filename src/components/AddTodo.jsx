import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className=' mt-12 flex items-center gap-3 flex-wrap '
    >
      <input
        type='text'
        className=' bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out '
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type='submit'
        className=' text-gray-100 bg-indigo-500 border-0 py-2 px-5 focus:outline-none rounded hover:bg-gradient-to-b from-indigo-500 to-blue-400 '
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
