import React, { useState } from 'react';
import { AppUI } from './AppUI'; // Importar el componente de interfaz de usuario
import gifImage from '../assets/pip-boy-app.gif'; // Imagen GIF para mostrar en la aplicación
import { TodoProvider } from '../TodoContext';

function App() {
    // Usar el hook useLocalStorage para obtener datos del almacenamiento local

    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;
