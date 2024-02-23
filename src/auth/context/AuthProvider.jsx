import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";
import { authReducer } from "./authReducer";
import { types } from "../types/types";


const initialState = {
    logged: false
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user
    }
}

export const AuthProvider = ({ children }) => {


    const [authState, dispatch] = useReducer(authReducer, initialState, init)

    const loginFn = (name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: 'A123BC',
                name: name
            }
        }
        localStorage.setItem('user', JSON.stringify(action.payload));
        dispatch(action)
    }

    const logoutFn = () => {
        const action = {
            type: types.logout,
        }
        localStorage.removeItem("user");
        dispatch(action);
    }


    return (
        <AuthContext.Provider value={{
            ...authState,
            loginFn,
            logoutFn
        }}>
            {children}
        </AuthContext.Provider>
    );

}

AuthProvider.propTypes = {
    children: PropTypes.node
}