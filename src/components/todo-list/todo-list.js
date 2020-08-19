import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';
 
const TodoList = ({ todo, onDelete,
                    onToggleImportant,
                    onToggleDone }) => {

    // const items = ['Learn React', 'Build Awesome App'];

    // Creates a jsx li element for each item in todo array
    const elements = todo.map((item)=>{

        const {id, ...otherProps} = item;

        return(
            <li key={id} className="list-group-item">                
                 <TodoListItem 
                    {...otherProps}
                    onDelete={()=>onDelete(id)}
                    onToggleImportant={()=>onToggleImportant(id)}
                    onToggleDone={()=>onToggleDone(id)}
                  />
            </li>
        );
    })

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}

export default TodoList;