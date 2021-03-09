import React from 'react';
import todosLists from "../data";
import Todos from "../TodoItems";
import NewTodoList from "../NewTodoList";

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todosLists
        }

        this.newTodo = this.newTodo.bind(this);
    }

    newTodo(e){
        var input = document.getElementById("newTodoListName");
        // console.log(input.value);

        var todoListName = input.value;

        var todoList = {
            id: this.state.todosLists.length +1,
            title: todoListName,
            list : []
        }


        var todosLists = [...this.state.todosLists, todoList];
        // console.log(todoLists);
        //
        this.setState({
            todosLists
        })
        input.value = "";
    }

    render() {
        // console.log(this.state.todosLists);
        return (
            <main>
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