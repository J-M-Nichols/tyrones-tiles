import { useContext } from "react"
import { tyroneRunningImage } from "../../../helpers/images"
import Fireworks from "../../fireworks/Fireworks"
import { AnimationDurationContext } from "../../../providers/animationDurationProvider"
import { useDispatch } from "react-redux"
import { handleChallengeGameStart } from "../../../features/handleGame"

const ChallengeGameCompleted = _ => {
    const {runDuration} = useContext(AnimationDurationContext)
    const dispatch = useDispatch()

    const replayChallenge = _ => {
        dispatch(handleChallengeGameStart())
    }

    return (
        <section>
            <Fireworks
                count={5}
            />        
            <div
                className='fixed-center bg-warning w-50 border rounded border-success border-5'
                style={{
                    maxHeight:'75%'
                }}
            >
    
                <div 
                    className="card custom-scrollbar-css bg-transparent border-0" 
                    style={{
                        maxHeight:'75vh'
                    }}
                >
                    <div
                        className='card-img-top move-right-shell'
                    >
                        <img 
                            src={tyroneRunningImage} 
                            className="pixelated move-right" 
                            alt="Tyrone running"
                            style={{
                                animationDuration:`${runDuration}s`
                            }}
                        />
                    </div>
                    <div 
                        className="card-body text-success text-center user-select-none"
                    >
                        <h5 
                            className="card-title"
                        >Outstanding!</h5>
                        <p 
                            className="card-text"
                        >You finished the entire challenge level!</p>
                        <button 
                            type="button"
                            className="btn btn-danger"
                            onClick={replayChallenge}
                        >Replay</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChallengeGameCompleted