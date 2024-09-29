import { createContext, useEffect, useState } from "react";

const AnimationDurationContext = createContext()

const AnimationDurationProvider = ({children}) => {
    const [animationDuration, setAnimationDuration] = useState(1)
    const [runDuration, setRunDuration] = useState(1)

    useEffect(()=>{
        const updateDuration = _ => {
            const screenWidth = window.innerWidth
            setAnimationDuration(screenWidth / 100)
            setRunDuration(screenWidth/400)
        }

        updateDuration()

        window.addEventListener('resize', updateDuration)

        return _ => {
            window.removeEventListener('resize', updateDuration)
        }
    }, [])

    return (
        <AnimationDurationContext.Provider 
            value={{
                animationDuration,
                runDuration
            }}
        >
            {children}
        </AnimationDurationContext.Provider>
    )
}

export {AnimationDurationContext, AnimationDurationProvider}