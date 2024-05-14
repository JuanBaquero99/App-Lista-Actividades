import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  const mensaje = completed === total ? 'Salvaste al Yermo Trotamundos' : '';
  return (
    <div>
      <h1>
        Has completado {completed} de {total} misiones
      </h1>
      {mensaje && <p className='mensaje-victoria'
      
      >{mensaje}</p>}
    </div>
  );
}

export { TodoCounter };