import React, { useState } from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../App/useLocalStorage'; // Importación de la función useLocalStorage
import gifImage from '../assets/pip-boy-app.gif'; // Imagen GIF para mostrar en la aplicación

function App() {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

    // Verificar si todos es un array, si no, establecerlo como un array vacío
    if (!Array.isArray(todos)) {
        saveTodos([]);
    }

    const [searchValue, setSearchValue] = useState('');

    // Filtrar tareas completadas y obtener el número total de tareas
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    // Filtrar las tareas según el valor de búsqueda
    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });

    // Función para marcar una tarea como completada
    const completeTodo = (text) => {
        const newTodos = todos.map(todo => {
            if (todo.text === text) {
                return { ...todo, completed: true };
            }
            return todo;
        });
        saveTodos(newTodos);
    };

    // Función para eliminar una tarea
    const deleteTodo = (text) => {
        const newTodos = todos.filter(todo => todo.text !== text);
        saveTodos(newTodos);
    };

    return (
        <AppUI 
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            deleteTodo={deleteTodo}
        />
    );
}

export default App;