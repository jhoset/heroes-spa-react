import { getHeroesByPublisher } from "../helpers"
import PropTypes from "prop-types";
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {

    const heroes =  useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <>
            <ul className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id} hero={hero} />
                    ))
                }
            </ul>
        </>
    )

}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
}