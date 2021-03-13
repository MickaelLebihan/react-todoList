import React from 'react';

function InputList(){
    return (
        <div>
            <label htmlFor="listOfItems">list d'items (séparé par des virgules)</label>
            <input id="newTodolistOfItems" type="text"/>
        </div>
    )
}

export default InputList;