import { useRef, useState } from 'react';
import http from '../../services/http';

export default function Login({ setToken }) {
    const loginInput = useRef(null);
    const passInput = useRef(null);
    const [hasError, setHasError] = useState(false);

    const onLogin = (e) => {
        console.log(loginInput.current.value);
        console.log(passInput.current.value);
        e.preventDefault();

        http.post('/login', {
            email: loginInput.current.value,
            password: passInput.current.value,
        })
            .then((res) => {
                console.log(setToken);
                // setToken(res.data.token);
                window.localStorage.setItem('token', res.data.token);
            })
            .catch(() => {
                setHasError(true);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h2>Login Page</h2>
                        </div>
                        <div className="card-body">
                            {hasError ? (
                                <div
                                    className="alert alert-danger"
                                    role="alert"
                                >
                                    Email yoki parolni noto'g'ri kiritdingiz
                                </div>
                            ) : (
                                <></>
                            )}
                            <form onSubmit={onLogin}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        ref={loginInput}
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone
                                        else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputPassword1"
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        ref={passInput}
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="exampleCheck1"
                                    >
                                        Check me out
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
}
