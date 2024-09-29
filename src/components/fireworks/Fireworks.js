import Firework from "./Firework"

const Fireworks = ({count}) => {
    return (
        <div
            className="firework-shell"
        >
            <div
                className="firework-holder"
            >
                {Array(count).fill().map((_, index)=>{
                    return (
                        <Firework 
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Fireworks