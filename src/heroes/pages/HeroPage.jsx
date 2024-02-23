import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const hero =  useMemo(() => getHeroById(id), [id]) ;

    const onNavigateBack = () => {
        navigate(-1)
    }


    if (!hero) {
        return <Navigate to={"/marvel"} />
    }


    return (
        <div className="row pt-4 rounded-5 animate__animated animate__fadeIn">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumbnail" />
            </div>

            <div className="col-8 d-flex flex-column justify-content-between animate__animated animate__fadeIn">
                <h2> {hero.superhero}</h2>
                <ul className="list-group list-group-flush gap-2 ">
                    <li className="list-group-item rounded-2 "> <b>Alter ego:</b> {hero.alter_ego} </li>
                    <li className="list-group-item rounded-2 "> <b>Publisher:</b> {hero.publisher} </li>
                    <li className="list-group-item rounded-2 "> <b>First Appearance:</b> {hero.first_appearance} </li>
                </ul>
                <div>
                <h5 className="mt-3">
                    Characters
                </h5>
                <p>
                    {hero.characters}
                </p>
                </div>

                <button onClick={onNavigateBack} className="btn btn-outline-info w-100">
                    Back
                </button>
            </div>
        </div>
    )

}