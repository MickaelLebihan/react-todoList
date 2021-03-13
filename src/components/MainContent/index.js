import React from 'react';
import todosLists from "../data";
import Todos from "../TodoLists";
import NewTodoList from "../TodoLists/NewTodoList";

import ThemeSelector from "../themes";

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todosLists
        }

        this.newTodo = this.newTodo.bind(this);
    }

    newTodo(e) {
        var inputElement = document.getElementById("newTodoListName");
        var listElement = document.getElementById("newTodolistOfItems");


        let list;
        if (listElement && listElement.value.length > 0) {
            list = listElement.value.split(",");
            list = list.filter((item) => item.trim().length > 0)
            listElement.value = "";
        } else {
            list = [];
        }
        console.log(list);

        if (inputElement.value.length === 0) {return}

        var todoListName = inputElement.value;

        var todoList = {
            id: this.state.todosLists.length +1,
            title: todoListName,
            list : list,
        }


        var todosLists = [...this.state.todosLists, todoList];
        // console.log(todoLists);
        //
        this.setState({
            todosLists
        })
        inputElement.value = "";

    }

    render() {
        // console.log(this.state.todosLists);
        return (
            <main>
                <ThemeSelector />
                <NewTodoList newTodo={this.newTodo}/>
                <div className="todos">
                    {
                        this.state.todosLists.map((todo) => <Todos key={todo.id} todos={todo}/>)
                    }
                </div>

                <p>corps de la page avec des jolies forms</p>

            </main>
        )
    }
}

export default MainContent;