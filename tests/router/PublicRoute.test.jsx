import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/routes/PublicRoute"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe("Tests on <PublicRoute />", () => {


    test('If not authenticated should display children', () => {
        const contextValue = { logged: false }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute >
                    <h1> Public_Route </h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Public_Route')).toBeTruthy();
    })

    test('Should navigate to root path if it is authenticated', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC123',
                name: 'Strider'
            }
        }

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/login']} >
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1> Public_Route </h1>
                            </PublicRoute>
                        } />
                        <Route path="/" element={(<h1> Default Private Page </h1>)} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Default Private Page')).toBeTruthy();
    })


})