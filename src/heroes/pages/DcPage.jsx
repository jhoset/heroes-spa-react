import { HeroList } from "../components/HeroList"

export const DcPage = () => {
    return (
        <>
            <div className="d-flex gap-2 align-items-center">
                <img height="40px" src={`/assets/heroes/dc-logo.png`} alt="" />
                <h1> Heroes </h1>
            </div>
            <hr />

            <HeroList publisher={"DC Comics"} />
        </>
    )
}