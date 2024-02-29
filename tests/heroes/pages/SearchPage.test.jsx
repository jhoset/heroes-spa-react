import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}))

describe("Tests on <SearchPage />", () => {


    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("Should display correctly with default values ", () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot();
    })

    test("Should display Batman and input with queryString", () => {
        const queryParameter = "batman"
        render(
            <MemoryRouter initialEntries={[`/search?q=${queryParameter}`]} >
                <SearchPage />
            </MemoryRouter>
        )

        // screen.debug();
        const input = screen.getByRole("textbox");
        expect(input.value).toBe(queryParameter);
        const heroName = screen.getByLabelText("heroName");
        expect(heroName.innerHTML.toString().toLowerCase().trim()).toContain(queryParameter);
        const warningAlert = screen.queryByLabelText("alertWarning");
        const dangerAlert = screen.queryByLabelText("alertDanger");
        expect(warningAlert).toBe(null);
        expect(dangerAlert).toBe(null);

    })

    test("Should display an error if hero not found", () => {
        const queryParameter = "Zero";
        render(
            <MemoryRouter initialEntries={[`/search?q=${queryParameter}`]}>
                <SearchPage />
            </MemoryRouter>
        )

        const dangerAlert = screen.queryByLabelText("alertDanger");
        expect(dangerAlert).toBeTruthy();
        
    })

    test("Should call navigate to new screen", () => {
        const queryParameter = "Zero";
        render(
            <MemoryRouter initialEntries={[`/search?q=${queryParameter}`]}>
                <SearchPage />
            </MemoryRouter>
        )
        const searchButton = screen.queryByRole("button");
        fireEvent.click(searchButton);
        expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${queryParameter}`);
    })


})