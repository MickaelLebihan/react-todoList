import React from 'react';
import './style.scss';

function TodoItem(props) {

    let id = props.data.id;
    let name = props.data.name;
    let checked = props.checked;

    return (
        <>
            <div id={id} className="todoItem" onClick={props.update}>
                <input type='checkbox' readOnly checked={checked}/>
                <label htmlFor={name}>{name}</label>
            </div>
        </>
    )
}

export default TodoItem;