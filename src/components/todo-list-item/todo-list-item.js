import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    // constructor(){
    //     super();

    //     this.completeTask = () =>{
    //         console.log(`Done: ${this.props.label}`);
    //     };
    // }

    // state = {
    //     done: false,
    //     important:false
    // };

    render(){

        const { label, onDelete,
                onToggleImportant,
                onToggleDone,
                important, done } = this.props;   
        
        let classNames = 'todo-list-item';  
        if(done){
            classNames+=' done';
        }   

        if(important){
            classNames+=' important';
        }
    
        return (
                <span className={classNames}>
                    <span
                        className="todo-list-item-label">
                    {label}
                    </span>
                    
                    <button type="button"
                            className="btn btn-outline-danger btn-sm float-right"
                            onClick={onDelete}>
                        <i className="fa fa-trash-o" />
                    </button>

                    <button type="button"
                            className="btn btn-outline-success btn-sm float-right"
                            onClick={ onToggleDone }>
                        <i className="fa fa-check" />
                    </button>
    
                    <button type="button"
                            className="btn btn-outline-info btn-sm float-right"
                            onClick={onToggleImportant}>
                        <i className="fa fa-exclamation" />
                    </button>
                </span>
        );
    }
}

