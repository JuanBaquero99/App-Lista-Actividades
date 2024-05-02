import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoTem } from './TodoTem';
import { CreateButton } from './CreateButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el Curso de React', completed: false },
  { text: 'Cortar cebolla', completed: false },
  { text: 'Cortar cebolla', completed: false },
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

    <TodoList>
    {defaultTodos.map(todo => (
      <TodoTem 
      key={todo.text} 
      text={todo.text}
      completed={todo.completed}
      />
    ))}

    </TodoList>

  <CreateButton />
    </ React.Fragment>
  );
}

export default App;
