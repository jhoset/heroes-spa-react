import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers";
export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q
    })

    const onSearch = (event) => {
        event.preventDefault();
        // if (!searchText.trim().length) return;
        navigate(`?q=${searchText.trim()}`);
    }



    return (
        <>
            <h1> Search </h1>
            <hr />
            <div className="row ">
                <div className="col-md-5">
                    <label htmlFor="">Hero Name:</label>
                    <form onSubmit={onSearch} className="mt-1">
                        <input onChange={onInputChange} value={searchText} type="text" autoComplete="off" name="searchText" placeholder="Search Hero" className="form-control" />
                        <button type="submit" className="btn btn-outline-warning mt-3 w-100">Search</button>
                    </form>
                </div>
            </div>
            <hr />
            <h2> Results:</h2>
            {
                q == '' && (
                <div className="alert alert-warning animate__animated animate__fadeIn">
                    Please enter a name to search a hero <b>{q}</b>
                </div>)
            }
                        {
                q !== '' && !heroes.length && (
                <div className="alert alert-danger animate__animated animate__fadeIn">
                    No records found with name: <b>{q}</b>
                </div>)
            }
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id} hero={hero} ></HeroCard>
                    ))
                }
            </div>

        </>
    )

}