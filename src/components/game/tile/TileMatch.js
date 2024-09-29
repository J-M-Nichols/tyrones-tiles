import { useSelector } from "react-redux"
import Tile from "./Tile"

const TileMatch = _ => {
    const {tiles} = useSelector(state=>state.tiles)

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