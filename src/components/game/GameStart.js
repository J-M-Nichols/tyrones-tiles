import {foodArray, tyroneIdleImage} from '../../helpers/images'
import { useDispatch } from 'react-redux'
import { handleCasualGameStart } from '../../features/handleGame'

const GameStart = _ => {
    const dispatch = useDispatch()
    
    const playNextGame = size => {
        dispatch(handleCasualGameStart(size))
    }

    return (    
        <div
            className='fixed-center w-50 h-75 bg-warning border rounded border-success border-5'
            style={{
                zIndex:1,
            }}
        >

            <div 
                className="card mh-100 custom-scrollbar-css bg-transparent border-0" 
            >
                <img 
                    src={tyroneIdleImage} 
                    className="pixelated card-img-top w-50 m-auto" 
                    alt="Tyrone running"
                    
                />
                <div 
                    className="card-body text-success text-center user-select-none"
                >
                    <h5 
                        className="card-title"
                    >Casual</h5>
                    <p 
                        className="card-text"
                    >Select the number of fruit you want to feed Tyrone.</p>
                    <div
                        className="d-flex flex-wrap gap-3 justify-content-center"
                    >
                        {foodArray.map((size, index) => {
                            return (
                                <button 
                                    key={index}
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={()=>playNextGame(size)}
                                >{size} fruit</button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameStart