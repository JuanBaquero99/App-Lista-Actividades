import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoTem } from '../TodoTem';
import { CreateButton } from '../CreateButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import gifImage from '../assets/pip-boy-app.gif';
import Modal from '../Modal'; 
import { TodoContext } from '../TodoContext';
import '../Modal/Modal.css';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    const handleCloseModal = () => {
        setOpenModal(false); // Cerrar el modal al hacer clic en el botón "Agregar Misión"
    };

    return (
        <div className="app-container">
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {!loading && searchedTodos.length === 0 && <EmptyTodos />}
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
            <CreateButton 
                setOpenModal={setOpenModal}
            />
            {openModal && (
                <div className="ModalBackground">
                    <Modal>
                        <TodoForm />
                    </Modal>
                    {/* Botón "Agregar Misión" para cerrar el modal */}
                    <button className="CloseModalButton" onClick={handleCloseModal}>
                        Cerrar
                    </button>
                </div>
            )}
            <div className="gif-container">
                <img src={gifImage} alt="Ejemplo GIF" />
            </div>
        </div>
    );
}

export { AppUI };
