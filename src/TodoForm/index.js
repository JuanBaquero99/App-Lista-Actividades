// TodoForm.js
import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [error, setError] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue.trim() !== '') {
            addTodo(newTodoValue);
            setOpenModal(false);
            setError('');
        } else {
            setError('Por favor, ingresa una tarea válida.');
        }
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit} className="TodoForm">
            <label className="TodoForm-label" htmlFor="todoTextarea">
                Escribe tu nueva misión
            </label>
            <textarea
                className="TodoForm-textarea"
                placeholder="Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
                id="todoTextarea"  // Agrega un id aquí
                name="todoTextarea" // Agrega un name aquí
            />
            {error && <p className="error-message">{error}</p>}
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };
