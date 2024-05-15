import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  const mensaje = completedTodos === totalTodos ? '¡Salvaste al Yermo Trotamundos!' : '';
  
  return (
    <div>
      <h1>
        Has completado {completedTodos} de {totalTodos} misiones
      </h1>
      {mensaje && (
        <p className='mensaje-victoria'>
          {mensaje}
        </p>
      )}
    </div>
  );
}

export { TodoCounter };