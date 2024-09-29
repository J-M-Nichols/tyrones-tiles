import { useEffect, useState } from "react"
import { fireworks } from "../../helpers/images"

const Firework = _ => {
    const [imageIndex, setImageIndex] = useState(0)
    const [position, setPosition] = useState({
        top: 0,
        left: 0
    })
    const [rotate, setRotate] = useState(0)

    useEffect(()=>{
        const updatePosition = _ => {
            const top = Math.random()*100
            const left = Math.random()*100
            const index = Math.floor(Math.random() * fireworks.length)
            const newRotate = Math.floor(Math.random()*360)

            setPosition({top, left})
            setImageIndex(index)
            setRotate(newRotate)
        }

        const interval = setInterval(updatePosition, 400)

        updatePosition()

        return _=>clearInterval(interval)
    }, [])

    return (
        <img 
            className="firework pixelated"
            alt="firework"
            src={fireworks[imageIndex]}
            style={{
                top:`${position.top}%`,
                left:`${position.left}%`,
                rotate: rotate
            }}
        />
    )
}

export default Firework