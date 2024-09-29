import { useSelector } from "react-redux"
import TileMatch from "./tile/TileMatch"
import GameFinished from "./gameFinished/GameFinished"
import PickUpFruit from "./PickUpFruit"
import ChallengeFinished from './gameFinished/ChallengeFinished'

const Challenge = _ => {
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
            {isComplete ? <GameFinished button={<ChallengeFinished/>} />:<></>}
        </section>
    )
}

export default Challenge