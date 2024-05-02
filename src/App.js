import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoTem } from './TodoTem';
import { CreateButton } from './CreateButton';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

    <TodoList>
      <TodoTem />
      <TodoTem />
      <TodoTem />
      <TodoTem />
    </TodoList>

  <CreateButton />
    </div>
  );
}

export default App;
