import React from "react";
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPalette} from "@fortawesome/free-solid-svg-icons/faPalette";

const themes = [
    {
        name : "default",
        mainColor: '#727272',
        secondaryColor: '#bababa'
    },
    {
        name : "blender",
        mainColor: '#00b7ff',
        secondaryColor: '#ff7700'
    },
    {
        name : "flash",
        mainColor: '#ff0070',
        secondaryColor: '#ffb700'
    },
    {
        name : 'fruit',
        mainColor: '#648661',
        secondaryColor: '#cf1500'
    },
    {
        name : 'eggplant',
        mainColor: '#5c5277',
        secondaryColor: '#925a5a'
    },
];

class ThemeSelector extends React.Component {
    constructor() {
        super();
        this.state = {
            selectorVisibility : false
        }

        this.setVisibility = this.setVisibility.bind(this);
    }

    setTheme(e){
        let themeName = e.target.getAttribute("id");

        let selectedTheme;
        themes.every((theme)=>{
            if (theme.name === themeName) {

                selectedTheme = theme;
                return false;
            }
            return true;
        })

        let todos = document.querySelectorAll(".todo");
        let addItemsInput = document.querySelectorAll(".addItem input");
        let addItemsButtons = document.querySelectorAll(".addItem button");
        let items = document.querySelectorAll(".todoItem label");
        let progressBar = document.querySelectorAll(".progressBar");

        let t = 0;
        while ( t < todos.length) {
            todos[t].style.backgroundColor = selectedTheme.mainColor;
            todos[t].style.backgroundColor = selectedTheme.mainColor;
            progressBar[t].style.backgroundColor = selectedTheme.secondaryColor;
            addItemsInput[t].style.borderColor = selectedTheme.secondaryColor;
            addItemsButtons[t].style.backgroundColor = selectedTheme.secondaryColor;
            t++;
        }
       let i = 0;
       while (i < items){
           items[i].style.backgroundColor = selectedTheme.mainColor;
           i++;
       }
    }

    setVisibility(e){
        let selectorVisibility = !this.state.selectorVisibility;
        this.setState({
            selectorVisibility
        })

    }
    render() {
        return (
            <>
                <div className="themeSelector">
                    <h2 id='themeSelectorButton' onClick={this.setVisibility} title="theme selector"><FontAwesomeIcon icon={faPalette}/></h2>

                    <div id="colorsContainer" style={{visibility : this.state.selectorVisibility ? "visible" : "hidden"}}>
                        {
                            themes.map((theme, index) => {
                                return (
                                    <div id={theme.name} className='mainColor'
                                         style={{backgroundColor: theme.mainColor}} onClick={this.setTheme} key={index}
                                         title={theme.name}>
                                        <div className="secondaryColor"
                                             style={{backgroundColor: theme.secondaryColor}}> </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ThemeSelector;