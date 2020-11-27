import { Component } from "react";

class HideMe extends Component {
    constructor() {
        super();

        this.state = {
            clicked: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: true });
    }

    render () {
        const setDisplay = this.state.clicked ? "none" : "block";
        return (
            <div 
                onClick={ this.handleClick }
                className="p-3 mb-2 bg-info text-white"
                style = {{
                    display: setDisplay,
                }}
            >
                { this.props.children }
            </div>
        );
    }

}

export default HideMe;