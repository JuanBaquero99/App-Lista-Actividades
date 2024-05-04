import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoTem } from './TodoTem';
import { CreateButton } from './CreateButton';
import './App.css';

// Importa el GIF
import gifImage from './assets/pip-boy-app.gif';

// Lista predeterminada de tareas
const defaultTodos = [
  { text: 'Terminar Fallout 3', completed: false },
  { text: 'Terminar Curso React', completed: false },
  { text: 'Ver Perfect Days', completed: false },
];

function App() {
  // Estado para almacenar la lista de tareas
  const [todos, setTodos] = React.useState(defaultTodos);

  // Estado para almacenar el valor de búsqueda
  const [searchValue, setSearchValue] = React.useState('');

  // Filtra las tareas completadas
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // Número total de tareas
  const totalTodos = todos.length;

  return (
    <div className="app-container">
      {/* Componente para mostrar el contador de tareas */}
      <TodoCounter completed={completedTodos} total={totalTodos} />
      {/* Componente para la barra de búsqueda de tareas */}
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {/* Componente para mostrar la lista de tareas */}
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoTem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      {/* Botón para crear nuevas tareas */}
      <CreateButton />
      {/* Contenedor para centrar el GIF */}
      <div className="gif-container">
        <img src={gifImage} alt="Ejemplo GIF" />
      </div>
    </div>
  );
}

export default App;