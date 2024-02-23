import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import "./LoginPage.css";

export const LoginPage = () => {
    const { username, password, onInputChange } = useForm({ username: '', password: '' })
    const navigate = useNavigate();
    const { loginFn } = useContext(AuthContext);

    const onLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/'
        loginFn(username || 'Guest User');
        navigate(lastPath, {
            replace: true
        })
    }

    return (
        <>
            <div className="login-dark">
                <form method="post">
                    <h2 className="sr-only">Login Form</h2>
                    <hr />
                    <p className="alert alert-info">This is an educational project, feel free to input any username & password to login</p>
                    <hr />
                    <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="username"
                            placeholder="User Name" value={username} onChange={onInputChange} />
                    </div>
                    <br />
                    <div className="form-group">
                        <input className="form-control" type="password" name="password"
                            placeholder="Password" value={password} onChange={onInputChange} />

                    </div>
                    <br />
                    <hr />
                    <div className="form-group">
                        <button onClick={onLogin} className="btn btn-info btn-block w-100" type="submit">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </>
    )

}