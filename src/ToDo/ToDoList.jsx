import React from 'react';
import ToDoItem from './ToDoItem';
import './todo.css';

export default function ToDoList(props) {
    return (
        <ul className="toDoList">
            {props.todos.map((todo) => {
                return (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        onEdited={props.onEdited}
                        onChange={props.onChange}
                        deleteItem={props.deleteItem}
                    />
                );
            })}
        </ul>
    );
}
