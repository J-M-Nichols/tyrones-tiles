import { useDispatch, useSelector } from "react-redux"
import generateImageArray from "../../../generator/generateImageArray"
import Tile from "./Tile"
import { useEffect } from "react"
import { setTiles } from "../../../features/tileSlice/tilesSlice"

const TileMatch = _ => {
    const {tiles} = useSelector(state=>state.tiles)
    const {gameSize} = useSelector(state=>state.game)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setTiles(generateImageArray(gameSize)))
    },[dispatch, gameSize])

    return (
        <section
            className="d-flex gap-3 flex-column"
        >
            {tiles.map((row, rowIndex)=>{
                return (
                    <div
                        key={rowIndex}
                        className="d-flex gap-3 m-auto"
                    >
                        {row.map((col, colIndex)=>{
                            return (
                                <Tile 
                                    key={colIndex}
                                    tile={col}
                                    index={{
                                        row: rowIndex, 
                                        col: colIndex
                                    }}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </section>
    )
}

export default TileMatch