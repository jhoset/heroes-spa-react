import { useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext"

export const Navbar = () => {
    const { user, logoutFn } = useContext(AuthContext);
    const navigate = useNavigate();

    const navLinkClass = "nav-item nav-link";
    const navActiveLinkClass = "nav-item nav-link active fw-bold"


    // console.log(props);

    const onLogout = () => {
        logoutFn();
        navigate("/login", {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">

            <Link
                className="navbar-brand text-warning  fw-bold"
                to="/"
            >
                Zero App

            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => isActive ? navActiveLinkClass : navLinkClass}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => isActive ? navActiveLinkClass : navLinkClass}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => isActive ? navActiveLinkClass : navLinkClass}
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        { user?.name }
                    </span>

                    <button onClick={onLogout} className="nav-item nav-link btn btn-outline-danger">
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )


}