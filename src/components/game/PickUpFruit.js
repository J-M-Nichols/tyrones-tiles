import tyroneRunning from '../../images/TyroneRunning.gif'
import fruit from '../../images/01.png'
import tyroneHurt from '../../images/TyroneHurt.gif'
import { useContext } from 'react'
import { AnimationDurationContext } from '../../providers/animationDurationProvider'
import { useSelector } from 'react-redux'

const PickUpFruit = _ => {
    const {animationDuration} = useContext(AnimationDurationContext)
    const {animateClass, displayHurt} = useSelector(state=>state.pickUpFruit)

    return (
        <div
            className="pick-up-fruit-shell rounded"
        >
            <img 
                src={tyroneRunning}
                className={`pixelated pick-up-fruit ${animateClass}`}
                alt='Tyrone running'
                style={{
                    animationDuration:`${animationDuration}s`
                }}
            />
            <img 
                src={fruit}
                className={`pixelated pick-up-fruit-item ${animateClass}`}
                alt='fruit'
                style={{
                    animationDuration:`${animationDuration}s`
                }}
            />
            <img 
                src={displayHurt ? tyroneHurt : `${process.env.PUBLIC_URL}/Tyrone.gif`}
                alt="Tyrone Osaurus Rex Idle"
                className={`pixelated pick-up-fruit-idle ${animateClass}`}
                style={{
                    animationDuration:`${animationDuration}s`
                }}
            />
        </div>
    )
}

export default PickUpFruit