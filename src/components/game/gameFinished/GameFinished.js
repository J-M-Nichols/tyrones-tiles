import { useSelector } from 'react-redux'
import { useContext } from 'react'
import { tyroneRunningImage } from '../../../helpers/images'
import { AnimationDurationContext } from '../../../providers/animationDurationProvider'

const GameFinished = ({button}) => {
    const {turn} = useSelector(state=>state.turn)
    const {runDuration} = useContext(AnimationDurationContext)

    return (        
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
                    >You did it!</h5>
                    <p 
                        className="card-text"
                    >You finished the game in {turn} turns!</p>
                    {button}
                </div>
            </div>
        </div>
    )
}

export default GameFinished