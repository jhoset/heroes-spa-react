import PropTypes from "prop-types";
import "./HeroCard.css";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CharactersByHero = ({ alter_ego, characters }) => {
    if (alter_ego === characters) return (<><br /></>)
    return (
        <span className="text-truncate d-block">
            <span className="fw-bold"> Characters: </span>
            {characters}
        </span>
    )
}


export const HeroCard = ({ hero }) => {
    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero
    const heroImageUrl = `/assets/heroes/${id}.jpg`;
    return (
        <div className="hero-card animate__animated animate__fadeIn">
            <div className='main'>
                <img className='tokenImage animate__animated animate_bounce' src={heroImageUrl} alt={id} />
                <h2 aria-label="heroName"> {superhero}</h2>
                <p className='description'>
                    <CharactersByHero alter_ego={alter_ego} characters={characters} />
                    <span className="fw-bold"> FA: </span>
                    {first_appearance}
                </p>

                <div className='tokenInfo'>
                    <div className="price">
                        <p>{alter_ego}</p>
                    </div>
                    <p>
                        <Link to={`/hero/${id}`}>
                            More info...
                        </Link>
                    </p>
                </div>
                <hr />
                <div className='creator'>
                    <div className='wrapper'>
                        <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
                    </div>
                    <span><ins>Creation of</ins> {publisher}</span>
                </div>
            </div>
        </div>
    )
}

HeroCard.propTypes = {
    hero: PropTypes.object.isRequired
}