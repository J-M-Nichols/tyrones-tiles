import { useDispatch } from 'react-redux'
import './Tile.css'
import { handleMove } from '../../../features/tileSlice/handleMove'
import tileSize from '../../../helpers/tileSize'
import { useContext } from 'react'
import { AnimationDurationContext } from '../../../providers/animationDurationProvider'

const Tile = ({tile, index}) => {
    const {img, flipped, type} = tile
    const dispatch = useDispatch()
    const {animationDuration} = useContext(AnimationDurationContext)

    const flipTile = _ => {
        dispatch(handleMove({
            index, 
            flipped,
            type,
            animationDuration
        }))
    }

    return (
        <div
            className={`tile-holder ${flipped ? 'flipped' : ''}`}
            onClick={flipTile}
            style={{
                width:`${tileSize}px`,
                height:`${tileSize}px`,
                minWidth:`${tileSize}px`,
                minHeight:`${tileSize}px`,
            }}
        >
            <div
                className="tile-inner d-flex"
            >
                <div 
                    className="tile btn btn-danger"
                />
                <div
                    className="tile tile-back btn btn-danger p-0"
                >
                    {
                        flipped?
                            <img 
                                src={img} 
                                alt="tile" 
                                className='img-fluid w-100 h-100 pixelated'
                            />
                        : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default Tile