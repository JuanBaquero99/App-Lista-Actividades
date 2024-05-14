import React from 'react';
import { TodoCounter } from '../TodoCounter'; // Componente para mostrar el contador de tareas
import { TodoSearch } from '../TodoSearch'; // Componente para la barra de búsqueda de tareas
import { TodoList } from '../TodoList'; // Componente para mostrar la lista de tareas
import { TodoTem } from '../TodoTem'; // Componente de plantilla para cada tarea
import { CreateButton } from '../CreateButton'; // Botón para crear nuevas tareas
import gifImage from '../assets/pip-boy-app.gif'; // Importar la imagen GIF

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    deleteTodo,
}) {
    const completeTodo = (text) => {
        // Lógica para marcar una tarea como completada
    };

    return (
        <div className="app-container">
            {/* Componente para mostrar el contador de tareas */}
            <TodoCounter completed={completedTodos} total={totalTodos} />
            {/* Componente para la barra de búsqueda de tareas */}
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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

export { AppUI };