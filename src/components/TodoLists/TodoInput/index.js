import React from 'react';
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";

function TodoInput(props){
    return (
        <>
            <span id={'addItem-'+ props.id} className='addItem'>
                <input id={'nameField-'+ props.id} className="newTodoInput" type="text"/>
                <button onClick={props.addTodo}><FontAwesomeIcon icon={faPlus} /></button>
            </span>
        </>
    )
}

export default TodoInput;