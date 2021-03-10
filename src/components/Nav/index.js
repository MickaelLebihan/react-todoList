import React from 'react';
import './style.scss';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboardList} from "@fortawesome/free-solid-svg-icons/faClipboardList";

function Nav(){
    return (
        <header>
            <div className="logo">
                <FontAwesomeIcon icon={faClipboardList}/><h1>todos</h1>
            </div>

            <nav>
                <ul>
                    <li>nav</li>
                    <li>corps</li>
                    <li>pied</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;