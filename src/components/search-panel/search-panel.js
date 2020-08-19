import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state={
        searchTerm: ''
    }

    //inlining css
    // const searchStyle = {
    //     fontSize: '25px'
    // };
    // return <input style={searchStyle} placeholder={searchPlaceholder} />;

    onSearchChange = (e) =>{     
        // Get current value of input   
        const searchTerm = e.target.value;
        // Update state
        this.setState({searchTerm});
        // Call event listener from app
        this.props.onSearchChange(searchTerm);
    }

    render() {
        const searchPlaceholder = 'Type here to search...';
        return (
            <input className="search-input form-control"
                onChange={this.onSearchChange}
                placeholder={searchPlaceholder}
                value={this.state.searchTerm} />
        );
    };
};
