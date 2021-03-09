import React from 'react';
import "./style.scss";

function TodoInput(props){
    return (
        <>
            <span id={'addItem-'+ props.id} className='addItem'>
                <input id="nameField" class="newTodoInput" type="text"/>
                <button onClick={props.addTodo}><span>+</span></button>
            </span>
        </>
    )
}

export default TodoInput;