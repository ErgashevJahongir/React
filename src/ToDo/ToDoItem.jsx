import './todo.css';

export default function ToDoItem({ todo, onChange, deleteItem, onEdited }) {
    return (
        <li className={`toDoItem ${todo.saved ? 'saved' : ''}`}>
            <span>{todo.title}</span>
            <div>
                <button className="save" onClick={() => onChange(todo.id)}>
                    <i className="far fa-check-square"></i>
                </button>
                <button
                    className="edit"
                    onClick={() => {
                        if (!todo.saved) {
                            onEdited(todo);
                        }
                    }}
                >
                    <i className="far fa-edit"></i>
                </button>
                <button
                    className="delete"
                    onClick={() => {
                        if (!todo.saved) {
                            deleteItem(todo.id);
                        }
                    }}
                >
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </li>
    );
}
