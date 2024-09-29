import { useContext } from 'react'
import { AnimationDurationContext } from '../../providers/animationDurationProvider'
import { useSelector } from 'react-redux'
import { foodImages, tyroneHurtImage, tyroneIdleImage, tyroneRunningImage } from '../../helpers/images'
import { treesImage } from '../../helpers/images'

const PickUpFruit = _ => {
    const {animationDuration} = useContext(AnimationDurationContext)
    const {animateClass, displayHurt, fruitIndex} = useSelector(state=>state.pickUpFruit)

    return (
        <div
            className="pick-up-fruit-shell rounded"
            style={{
                backgroundImage:`url(${treesImage})`
            }}
        >
            <img 
                src={tyroneRunningImage}
                className={`pixelated pick-up-fruit ${animateClass}`}
                alt='Tyrone running'
                style={{
                    animationDuration:`${animationDuration}s`
                }}
            />
            <img 
                src={foodImages[fruitIndex]}
                className={`pixelated pick-up-fruit-item ${animateClass}`}
                alt='food'
                style={{
                    animationDuration:`${animationDuration}s`
                }}
            />
            <img 
                src={displayHurt ? tyroneHurtImage : tyroneIdleImage}
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