import React, {Component} from 'react';
import './status-filter.css';

export default class StatusFilter extends Component{

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];
    

    render(){

        const {filter, onFilterChange}=this.props;

        const buttons = this.buttons.map(({name, label})=>{  
            const isActive = filter===name;      
            const clazz = isActive?'btn-info':'btn-outline-secondary';   
            return(
                <button type="button" 
                        className={`btn ${clazz}`}
                        key={name}
                        onClick={()=>onFilterChange(name)}>{label}</button>
            );

        })

        return(
            <div className="status-filter btn-group">
                {buttons}
            </div>
        );
    }
}
