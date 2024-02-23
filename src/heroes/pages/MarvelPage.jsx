import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
    return (
        <>
            <div className="d-flex gap-2 align-items-center">
                <img height="40px" src={`/assets/heroes/marvel-logo.png`} alt="" />
                <h1> Heroes </h1>
            </div>

            <hr />

            <HeroList publisher={"Marvel Comics"} />
        </>
    )
}