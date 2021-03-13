import React from "react";
import InputList from "./InputList";

class NewTodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            provideList : false,
        }
        this.activateList = this.activateList.bind(this);
    }

    activateList(){
        this.setState({
            provideList : !this.state.provideList
        })
    }

    render() {
        return (
            <>
                <h2>ajout d'une nouvelle liste </h2>

                <div>
                    <label htmlFor="newTodoListName">nom de la todo</label>
                    <input id="newTodoListName" type="text"/>
                </div>

                <div>
                    <label htmlFor="provideList">inclure une liste d'items ?</label>
                    <input id="provideList" type="checkbox" onClick={this.activateList}/>
                </div>

                {this.state.provideList ? <InputList /> : ""}
                
                <button onClick={this.props.newTodo}>créer</button>

            </>
        )
    }
}

export default NewTodoList;