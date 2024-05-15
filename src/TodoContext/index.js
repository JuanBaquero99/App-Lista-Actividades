import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const { storedValue: todos, saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

    if (!Array.isArray(todos)) {
        saveTodos([]); 
    }

    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });

    const addTodo = (text) => {
        const newTodo = { text: text, completed: false };
        const newTodos = [...todos, newTodo];
        saveTodos(newTodos);
    };
    
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
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
