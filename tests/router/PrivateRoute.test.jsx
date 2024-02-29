import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRoute } from "../../src/routes/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Tests on <PrivateRoute />", () => {


    test('If is authenticated should display default private page', () => {
        
        Storage.prototype.setItem = jest.fn();
        
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC123',
                name: 'Strider'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute >
                        <h1> Default Private Page </h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Default Private Page')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", '/');
    })


})