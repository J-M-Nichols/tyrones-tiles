import { useDispatch, useSelector } from "react-redux"
import { handleCasualGameStart } from "../../../features/handleGame"
import { foodArray } from "../../../helpers/images"

/**
 * Allows the player to select the size of the next casual game. 
 * They can also replay at the same size.
 * 
 * Sizes:
 * 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26 
 * 
 * @returns Buttons to play the next casual game
 */
const CasualFinished = _ => {
    const {gameSize} = useSelector(state=>state.game)
    const dispatch = useDispatch()

    const playNextGame = size => {
        dispatch(handleCasualGameStart(size))
    }

    return (
        <div
            className="d-flex flex-wrap gap-3 justify-content-center"
        >
            <button 
                type="button"
                className="btn btn-danger"
                onClick={()=>playNextGame(gameSize)}
            >Replay</button>
            {foodArray.map((size, index) => {
                return (
                    <button 
                        key={index}
                        type="button"
                        className="btn btn-danger"
                        onClick={()=>playNextGame(size)}
                    >{size} food</button>
                )
            })}
        </div>
    )
}

export default CasualFinished