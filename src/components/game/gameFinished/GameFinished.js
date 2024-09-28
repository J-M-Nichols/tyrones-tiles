import { useSelector } from 'react-redux'
import tyroneRunning from '../../../images/TyroneRunning.gif'
import { useState, useEffect } from 'react'

const GameFinished = ({button}) => {
    const {turn} = useSelector(state=>state.turn)
    const [duration, setDuration] = useState(1)

    useEffect(()=>{
        const setAnimationDuration = _ => {
            const screenWidth = window.innerWidth
            setDuration(screenWidth / 400)
        }

        setAnimationDuration()

        window.addEventListener('resize', setAnimationDuration)

        return _ => {
            window.removeEventListener('resize', setAnimationDuration)
        }
    }, [])

    return (        
        <div
            className='fixed-center w-50'
        >

            <div 
                className="card bg-warning border border-success border-5" 
            >
                <div
                    className='card-img-top move-right-shell'
                >
                    <img 
                        src={tyroneRunning} 
                        className="pixelated move-right" 
                        alt="Tyrone running"
                        style={{
                            animationDuration:`${duration}s`
                        }}
                    />
                </div>
                <div 
                    className="card-body"
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