import React from 'react';
import { TodoCounter } from './TodoCounter'; // Importa el componente TodoCounter
import { TodoSearch } from './TodoSearch'; // Importa el componente TodoSearch
import { TodoList } from './TodoList'; // Importa el componente TodoList
import { TodoTem } from './TodoTem'; // Importa el componente TodoTem
import { CreateButton } from './CreateButton'; // Importa el componente CreateButton
import './App.css'; // Importa los estilos CSS de la aplicación

// Importa el GIF
import gifImage from './assets/pip-boy-app.gif'; // Importa la imagen GIF

// Lista predeterminada de tareas
const defaultTodos = [
  { text: 'Terminar Fallout 3', completed: true },
  { text: 'Terminar Curso React', completed: false },
  { text: 'Ver Perfect Days', completed: false },
  { text: 'Terminar Skirym', completed: true },
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

  //Linea para lograr las busquedas de acuerdo a palabras sin importar mayuscula o minuscula
const searchedTodos = todos.filter(todo => {
  const todoText = todo.text.toLowerCase(); 
  const searchText = searchValue.toLowerCase();
  return todoText.includes(searchText);
});

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
        {/* Mapea sobre la lista de tareas y renderiza el componente TodoTem */}
        {searchedTodos.map(todo => (
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
