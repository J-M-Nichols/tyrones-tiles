import { useSelector } from "react-redux"
import TileMatch from "./tile/TileMatch"
import GameFinished from "./gameFinished/GameFinished"
import CasualFinished from "./gameFinished/CasualFinished"
import PickUpFruit from "./PickUpFruit"

const Casual = _ => {
    const {turn} = useSelector(state=>state.turn)
    const {isComplete} = useSelector(state=>state.tiles)

    return (
        <section
            className="d-flex flex-column justify-content-center gap-3"
        >
            <PickUpFruit />
            <p
                className="badge bg-warning p-3 m-auto border border-danger border-3 text-success"
            >Turn: {turn}</p>
            <TileMatch />
            {isComplete ? <GameFinished button={<CasualFinished/>} />:<></>}
        </section>
    )
}

export default Casual