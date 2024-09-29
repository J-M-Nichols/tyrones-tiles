import { useDispatch, useSelector } from "react-redux"
import TileMatch from "./tile/TileMatch"
import GameFinished from "./gameFinished/GameFinished"
import PickUpFruit from "./PickUpFruit"
import { useEffect } from "react"
import { setTiles } from "../../features/tileSlice/tilesSlice"
import generateImageArray from "../../generator/generateImageArray"
import { handleNextChallengeGame } from "../../features/handleGame"
import challengeSize from "../../helpers/challengeSize"
import ChallengeGameCompleted from "./gameFinished/ChallengeGameCompleted"
import { foodArray } from "../../helpers/images"

const Challenge = _ => {
    const {turn} = useSelector(state=>state.turn)
    const {isComplete} = useSelector(state=>state.tiles)
    const {gameSize, gameLevel} = useSelector(state=>state.game)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(turn===0){
            dispatch(setTiles(generateImageArray(gameSize)))
        }
    },[dispatch, gameSize, turn])

    return (
        <>
            {
                (foodArray.length * challengeSize === gameLevel) ?
                    <ChallengeGameCompleted/>
                : <section
                    className="d-flex flex-column justify-content-center gap-3"
                >
                    <PickUpFruit />
                    <section
                        className="d-flex justify-content-center gap-3 text-background text-center rounded m-auto p-3 user-select-none border border-success border-3"
                    >
                        <p
                            className="badge bg-warning p-3 m-auto border border-danger border-3 text-success"
                        >Turn: {turn}</p>
                        <p
                            className="badge bg-warning p-3 m-auto border border-danger border-3 text-success"
                        >level: {gameLevel+1}</p>
                    </section>
                    <TileMatch />
                    {isComplete ? 
                        <GameFinished 
                            button={
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={()=>dispatch(handleNextChallengeGame())}
                                >Next Level</button>
                            } 
                        />
                        :<></>
                    }
                </section>
            }
        </>
    )
}

export default Challenge