import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoTem } from './TodoTem';
import { CreateButton } from './CreateButton';
import React from 'react';
import './App.css';

// Importa el GIF
import gifImage from './assets/pip-boy-app.gif';

const defaultTodos = [
  { text: 'Terminar Fallout 3', completed: false },
  { text: 'Terminar Curso React', completed: false },
  { text: 'Ver Perfect Days', completed: false },
];

function App() {
  return (
    <div className="app-container">
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
      {/* Contenedor para centrar el GIF */}
      <div className="gif-container">
        <img src={gifImage} alt="Ejemplo GIF" />
      </div>
    </div>
  );
}

export default App;