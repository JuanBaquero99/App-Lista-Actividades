import './TodoTem.css';

function TodoTem(props) {
  return (
    <li className="TodoTem">
      <span 
      className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}
      
      >
        V
      </span>
      <p className={`TodoTem-p ${props.completed && "TodoTem-p--complete"}`}>
        {props.text}
      </p>
      <span 
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        X
      
      </span>
    </li>
  );
}

export { TodoTem };