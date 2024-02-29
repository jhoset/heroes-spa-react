import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { AppRouter } from "../../src/routes/AppRouter"

describe("Tests on <AppRouter />", () => {



    test("Should display login Page if not authenticated", () => {

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('Login Form')).toBeTruthy();

    })

    test("Should display Zero App if it is authenticated", () => {
        const contextValue = {
            logged: true,
            user: {
                id: "ABC123",
                name: "Test"
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getByText('Zero App')).toBeTruthy();
    })


})