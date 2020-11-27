import { Component } from "react";

class CountBy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const updated = this.state.count + this.props.step;
        this.setState({ count: updated });
    }

    render() {
        return (
            <p 
                onClick={ this.handleClick }
                className="p-3 mb-2 bg-primary text-white"
            >
                { this.state.count }
            </p>
        );
    }

}

export default CountBy;