import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className=' w-screen flex flex-col items-center justify-center '>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
