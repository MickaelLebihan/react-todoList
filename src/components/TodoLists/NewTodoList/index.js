import React from "react";

function NewTodoList(props){
    return (
        <>
            <h2>ajout d'une nouvelle liste </h2>
            <label htmlFor="newTodoListName">nom de la todo</label>
            <input id="newTodoListName" type="text"/><button onClick={props.newTodo}>+</button>
        </>
    )
}

export default NewTodoList;