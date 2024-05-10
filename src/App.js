import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoTem } from './TodoTem';
import { CreateButton } from './CreateButton';
import './App.css';

import gifImage from './assets/pip-boy-app.gif';

// Lista predeterminada de tareas
// const defaultTodos = [
//   { text: 'Terminar Fallout 3', completed: true },
//   { text: 'Terminar Curso React', completed: false },
//   { text: 'Ver Perfect Days', completed: false },
//   { text: 'Terminar Skirym', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function useLocalStorage(itemName) {
  const [item, setItem] = React.useState();

      // Obtener los datos del localStorage o establecer una lista vacía si no hay datos
      const localStorageItem = localStorage.getItem(itemName);
      let parsedTodos = [];
  
      if (localStorageItem) {
          try {
              // Intenta parsear los datos almacenados en el localStorage
              parsedTodos = JSON.parse(localStorageItem);
          } catch (error) {
              console.error('Error al parsear los datos del localStorage:', error);
              // En caso de un error al parsear, establece parsedTodos como una lista vacía
              parsedTodos = [];
          }
      } else {
          // Si no hay datos en el localStorage, establece parsedTodos como una lista vacía
          localStorage.setItem(itemName, JSON.stringify([]));
      }
      const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem);  
        
      };
  
 
}


function App() {

    // Estado para almacenar la lista de tareas
    const [todos, setTodos] = React.useState(parsedTodos);

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


    const completeTodo = (text) => {
        const newTodos = todos.map(todo => {
            if (todo.text === text) {
                return { ...todo, completed: true };
            }
            return todo;
        });
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = todos.filter(todo => todo.text !== text);
        saveTodos(newTodos);
    }

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
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
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