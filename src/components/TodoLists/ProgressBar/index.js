import React from 'react';
import './style.scss';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list : props.data.list,
            completed : props.data.completed,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {

            this.setState({
                list: this.props.data.list,
                completed: this.props.data.completed
            })
        }
    }

    getPercent(){
        return Math.ceil((this.state.completed * 100) / this.state.list.length);
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