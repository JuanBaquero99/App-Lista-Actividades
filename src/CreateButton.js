import './CreateButton.css';

function CreateButton() {
    return (

        <button className="CreateTodoButton"
            onClick={
             (event) =>{console.log('Le diste click')
                console.log(event)
                console.log(event.target)
             } 
            }
        
        >Agregar Misión</button >

    );
}

export { CreateButton };