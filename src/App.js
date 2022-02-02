// TODO Start
import './App.css';
import React from 'react';
import { useState } from 'react';
import ToDoList from './ToDo/ToDoList';
import ToDoInput from './ToDo/ToDoInput';
// TODO End
// AUTHOR Start
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const HomePage = lazy(() => import('./Autorizatsiya/pages/Home/index'));
const LoginPage = lazy(() => import('./Autorizatsiya/pages/Auth/Login'));
// const RegisterPage = lazy(() => import('./Autorizatsiya/pages/Auth/register'));

function App() {
    // TODO Start
    const [todos, setTodos] = useState([
        {
            title: 'Real',
            id: 1,
            complited: false,
            saved: false,
        },
        {
            title: 'Manchster',
            id: 2,
            complited: false,
            saved: false,
        },
        {
            title: 'Yuventus',
            id: 3,
            complited: false,
            saved: false,
        },
    ]);
    const [editItem, setItem] = useState({
        id: null,
        title: null,
    });

    function onChange(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.saved = !todo.saved;
                }
                return todo;
            })
        );
    }

    function deleteItem(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function addItem(title, id = null) {
        setTodos(
            todos.concat({
                title,
                id: id != null ? id : Date.now(),
                complited: false,
                saved: false,
            })
        );
        setItem({
            id: null,
            title: '',
        });
    }

    function setValueInput(e) {
        e.terget.value = e.title;
    }

    function onEdited(todo) {
        setItem({
            id: todo.id,
            title: todo.title,
        });
        deleteItem(todo.id);
    }
    // TODO End

    // AUTHOR Start
    const [token, setToken] = useState(window.localStorage.getItem('token'));

    return (
        <div className="app">
            <section className="todo">
                <h1>To Do List</h1>
                <ToDoInput
                    item={editItem}
                    addItem={addItem}
                    setValueInput={setValueInput}
                />
                {todos.length ? (
                    <ToDoList
                        todos={todos}
                        onChange={onChange}
                        onEdited={onEdited}
                        deleteItem={deleteItem}
                    />
                ) : (
                    <p>Hech qanday eslatma yo'q</p>
                )}
            </section>
            <section className="author">
                <Router>
                    <Suspense fallback={<h1>Error from react</h1>}>
                        <Routes>
                            {token ? (
                                <Route
                                    exact
                                    path="/"
                                    element={<HomePage />}
                                ></Route>
                            ) : (
                                <Route
                                    exact
                                    path="/login"
                                    element={() => (
                                        <React.Fragment>
                                            <LoginPage setToken={setToken} />
                                        </React.Fragment>
                                    )}
                                ></Route>
                            )}
                        </Routes>
                    </Suspense>
                </Router>
            </section>
        </div>
    );
}

export default App;
