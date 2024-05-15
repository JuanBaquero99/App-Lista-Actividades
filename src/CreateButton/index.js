import React from 'react';
import './CreateButton.css';

function CreateButton({ setOpenModal }) { // Modificado para recibir setOpenModal como prop
    return (
        <button className="CreateTodoButton"
            onClick={() => {
                setOpenModal(prevState => !prevState); // Cambiado a prevState
            }}
        >
            Agregar Misión
        </button>
    );
}

export { CreateButton };