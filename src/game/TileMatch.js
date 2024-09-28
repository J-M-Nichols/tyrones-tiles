import { useDispatch, useSelector } from "react-redux"
import generateImageArray from "../generator/generateImageArray"
import Tile from "./tile/Tile"
import { useEffect } from "react"
import { setTiles } from "../features/tileSlice/tilesSlice"

const TileMatch = _ => {
    const {tiles} = useSelector(state=>state.tiles)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setTiles(generateImageArray(3)))
    },[dispatch])

    return (
        <section
            className="d-flex gap-3 flex-column"
        >
            {tiles.map((row, rowIndex)=>{
                return (
                    <div
                        key={rowIndex}
                        className="d-flex gap-3"
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