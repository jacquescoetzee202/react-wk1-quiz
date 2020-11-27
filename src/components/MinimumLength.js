import { Component } from "react";

import Form from 'react-bootstrap/Form';

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
            <Form>
                <Form.Group controlId="text">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="go on type summin" onChange={ this.handleChange } />
                    <Form.Text 
                        className="text-muted" 
                        style = {{
                            display: state,
                        }}>
                        Too short!
                    </Form.Text>
                </Form.Group>
            </Form>
        );
    }

}

export default MinimumLength;