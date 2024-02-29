const { render, screen, fireEvent } = require("@testing-library/react")
const { AuthContext } = require("../../../src/auth/context/AuthContext")
const { Navbar } = require("../../../src/ui/components")
const { MemoryRouter } = require("react-router-dom")


const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe("Tests on <Navbar />", () => {


    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("Should display the user logged name", () => {

        const initialContextValue = {
            logged: true,
            user: { id: "ABC123", name: "Test_Name" }
        }

        render(
            <AuthContext.Provider value={initialContextValue}>
                <MemoryRouter initialEntries={['/marvel']} >
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText("Test_Name")).toBeTruthy();
    })

    test("Should call logout and navigate when click on logout button", () => {
        const logoutMock = jest.fn();
        const initialContextValue = {
            logged: true,
            user: { id: "ABC123", name: "Test_Name" },
            logoutFn: logoutMock,
        }

        render(
            <AuthContext.Provider value={initialContextValue}>
                <MemoryRouter initialEntries={['/marvel']} >
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        const logoutButton = screen.getByText("Logout");
        fireEvent.click(logoutButton);

        expect(logoutMock).toHaveBeenCalled();
        expect(mockUseNavigate).toHaveBeenCalled();


    })

})