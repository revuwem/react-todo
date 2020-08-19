import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        input: ''
    };

    onInputChange = (e) =>{
        //e.target.value is current value of input
        this.setState({
            input: e.target.value
        });
    };

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onItemAdded(this.state.input);
        this.setState({
            input: ''
        });
    }

    render() {
        return (
            <form className="item-add-form d-flex"
                    onSubmit = {this.onSubmit}>
                <input type="text"
                    className="form-control"
                    onChange={this.onInputChange}
                    placeholder="What needs to be done"
                    value={this.state.input}
                />
                <button type="submit" className="btn btn-success">Add task</button>
            </form>
        );
    };
}
