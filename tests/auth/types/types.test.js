import { types } from "../../../src/auth/types/types"



describe("Tests on Types", () => {


    test('Should return these types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })


})