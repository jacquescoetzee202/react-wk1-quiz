import { Component } from "react";

import Button from 'react-bootstrap/Button';

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

        <Button 
            variant="info" 
            onClick={ this.handleClick } 
        >
            { state }
        </Button>
        );
    }

}

export default EvenClicks;