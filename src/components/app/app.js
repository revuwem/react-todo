import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';


import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build React App'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        searchTerm: '',
        filter: 'all' //all, active, done
    };

    createTodoItem(label) {
        return {
            id: this.maxId++,
            label,
            important: false,
            done: false
        }
    }

    deleteTodoItem = (id) => {
        this.setState(({ todoData }) => {

            const index = todoData.findIndex((item) => item.id === id);
            const newTodoData = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

            return {
                todoData: newTodoData
            }
        });
    };

    addTodoItem = (text) => {
        //generate id
        const newItem = this.createTodoItem(text);

        //add element in array
        this.setState(({ todoData }) => {
            const newTodoData = [...todoData, newItem];

            return {
                todoData: newTodoData
            }
        });


    }

    toggleProperty = (arr, id, propName) => {
        // Get object
        const index = arr.findIndex((item) => item.id === id);
        const item = arr[index];

        //Get updated object copy
        const newItem = { ...item, [propName]: !item[propName] };

        //Construct and return new array
        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ]

    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            const newTodoData = this.toggleProperty(todoData, id, 'important');

            return {
                todoData: newTodoData
            }

        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const newTodoData = this.toggleProperty(todoData, id, 'done');

            return {
                todoData: newTodoData
            };
        });
    };

    onSearchChange = (searchTerm) => {
        this.setState({searchTerm});
    };

    onFilterChange=(filter)=>{
        this.setState({ filter });
    }

    search(items, term){
        if(term.length===0){
            return items;
        }else{
            return items.filter((item)=>item.label.toLowerCase().indexOf(term.toLowerCase())>-1);
        }        
    };

    filter(items, filter){
        switch(filter){
            case 'all': 
                return items;
            case 'active': 
                return items.filter((item)=>!item.done);
            case 'done':
                return items.filter((item)=>item.done);
            default:
                return items;
        };
    };

    

    render() {

        const { todoData, searchTerm, filter } = this.state;

        //Search items and filter it
        const visibleItems = this.filter(this.search(todoData, searchTerm), filter);

        const doneCount = todoData.filter((el) => el.done).length;

        const todoDount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                {/* <span>{(new Date()).toString()}</span>
            {isLoggedIn?welcomeBox:loginBox} */}
                <AppHeader toDo={todoDount} done={doneCount} />
                <div className="top-panel d-flex flex-wrap">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <StatusFilter filter={filter}
                                  onFilterChange = {this.onFilterChange}/>
                </div>
                <TodoList
                    todo={visibleItems}
                    onDelete={this.deleteTodoItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <div className="bottom-panel d-flex flex-wrap">
                    <ItemAddForm onItemAdded={this.addTodoItem} />
                </div>
            </div>
        );
    }
};
