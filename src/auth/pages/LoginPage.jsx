import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

    const navigate = useNavigate();
    const { loginFn } = useContext(AuthContext);

    const onLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/'
        loginFn("Sub Zero");
        navigate(lastPath, {
            replace: true
        })
    }

    return (
        <div className="container mt-5">
            <h1> Login </h1>
            <hr />
            <button
                onClick={onLogin}
                type="submit"
                className="btn btn-primary">Login</button>
        </div>
    )

}