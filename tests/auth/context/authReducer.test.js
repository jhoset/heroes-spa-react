import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe("Tests on authReducer", () => {

    const initialState = {
        logged: false
    }

    test("Should return initial state", () => {
        const newState = authReducer(initialState, {});
        expect(newState).toBe(initialState);
    })

    test("Should login a user", () => {
        const action = {
            type: types.login,
            payload: { id: 1, name: "Test" }
        }
        const newState = authReducer(initialState, action);
        expect(newState.logged).toBe(true);
        expect(newState.user).toBe(action.payload)
    })

    test("Should logout a user", () => {
        const logoutAction = {
            type: types.logout
        }
        const loginAction = {
            type: types.login,
            payload: { id: 1, name: "Test" }
        }
        const loginState = authReducer(initialState, loginAction);
        const newState = authReducer(loginState, logoutAction)
        expect(newState.logged).toBe(false);
        expect(newState.user).toBeFalsy();
    })


})