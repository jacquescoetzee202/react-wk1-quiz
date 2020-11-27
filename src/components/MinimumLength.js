import { Component } from "react";

class MinimumLength extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ input: event.currentTarget.value })
    }

    render() {
        const input = this.state.input;
        const lengthMin = this.props.length;
        const state = input.length >= lengthMin ? "none" : "block";

        return (
            <form>
                <div className="form-group">
                    <label for="text"> { lengthMin } character length test</label>
                    <input
                        type="text"
                        id="text"
                        placeholder="go on type summin"
                        value={input}
                        className="form-control"
                        onChange={ this.handleChange }
                    />
                    <small 
                        id="text" 
                        className="form-text text-muted"
                        style = {{
                            display: state,
                        }}
                    >
                        Too short!
                    </small>
                </div>
            </form>
        );
    }

}

export default MinimumLength;