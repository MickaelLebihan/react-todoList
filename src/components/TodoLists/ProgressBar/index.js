import React from 'react';
import './style.scss';

class ProgressBar extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    getPercent(){
        return Math.ceil((this.props.completed * 100) / this.props.list.length);
    }

    render() {
        return (
            <div id='levelContainer' className="levelContainer">
                {/*<span>{this.state.completed}/{this.state.list.length}</span>*/}
                {<div className={"progressBar"} style={{width: this.getPercent() + "%"}}>
                    {/*<div className="cursor">{this.getPercent()}</div>*/}
                </div>}
            </div>
        )
    }
}

export default ProgressBar;