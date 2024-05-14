import './TodoTem.css';

function TodoTem(props) {
  return (
    <li className="TodoTem">
      <span 
      className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}
      
      >
        ✔︎
      </span>
      <p className={`TodoTem-p ${props.completed && "TodoTem-p--complete"}`}>
        {props.text}
      </p>
      <span 
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        ☢️
      
      </span>
    </li>
  );
}

export { TodoTem };