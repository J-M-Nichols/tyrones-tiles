import { createContext, useEffect, useState } from "react";

const AnimationDurationContext = createContext()

const AnimationDurationProvider = ({children}) => {
    const [animationDuration, setAnimationDuration] = useState(1)
    
    useEffect(()=>{
        const updateAnimationDuration = _ => {
            const screenWidth = window.innerWidth
            setAnimationDuration(screenWidth / 100)
        }

        updateAnimationDuration()

        window.addEventListener('resize', updateAnimationDuration)

        return _ => {
            window.removeEventListener('resize', updateAnimationDuration)
        }
    }, [])

    return (
        <AnimationDurationContext.Provider 
            value={{
                animationDuration
            }}
        >
            {children}
        </AnimationDurationContext.Provider>
    )
}

export {AnimationDurationContext, AnimationDurationProvider}