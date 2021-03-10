import React from 'react';
import "./style.scss";

function TodoInput(props){
    return (
        <>
            <span id={'addItem-'+ props.id} className='addItem'>
                <input id={'nameField-'+ props.id} className="newTodoInput" type="text"/>
                <button onClick={props.addTodo}><span><i className="fas fa-plus"></i></span></button>
            </span>
        </>
    )
}

export default TodoInput;