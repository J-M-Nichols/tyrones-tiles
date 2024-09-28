import { useDispatch } from 'react-redux'
import './Tile.css'
import { handleMove } from '../../features/tileSlice/controlTiles'

const Tile = ({tile, index}) => {
    const {img, flipped, type} = tile
    const dispatch = useDispatch()

    const flipTile = _ => {
        dispatch(handleMove({
            index, 
            flipped,
            type
        }))
    }

    return (
        <div
            className={`tile-holder ${flipped ? 'flipped' : ''}`}
            onClick={flipTile}
        >
            <div
                className="tile-inner d-flex"
            >
                <div 
                    className="tile btn btn-danger"
                />
                <div
                    className="tile tile-back btn btn-danger"
                >
                    <img src={img} alt="tile" />
                </div>
            </div>
        </div>
    )
}

export default Tile