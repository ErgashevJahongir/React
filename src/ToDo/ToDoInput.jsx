import { useEffect, useState } from 'react';
import './todo.css';

export default function ToDoInput({ addItem, item }) {
    const [value, setValue] = useState(item.title);
    const [id, setId] = useState(item.id);

    function sabmitHandler(event) {
        event.preventDefault();

        if (value.trim()) {
            addItem(value, id);
            setValue('');
        }
    }
    useEffect(() => {
        setValue(item.title);
        setId(item.id);
    }, [item]);

    return (
        <form className="todoForm" onSubmit={sabmitHandler}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="sabmit">Qo'shish</button>
        </form>
    );
}
