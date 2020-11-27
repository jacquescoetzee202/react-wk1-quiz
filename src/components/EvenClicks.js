import { Component } from "react";

class EvenClicks extends Component {
    constructor() {
        super();

        this.state = {
            clicks: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const updated = this.state.clicks + 1;
        this.setState({ clicks: updated });
    }

    render() {
        const currentClicks = this.state.clicks;
        const state = currentClicks % 2 === 0 && currentClicks > 0 ? "Even" : "Odd";
        return (
        <button 
            onClick={ this.handleClick }
            type="button" 
            className="btn btn-info"
        >
            { state }
        </button>
        );
    }

}

export default EvenClicks;