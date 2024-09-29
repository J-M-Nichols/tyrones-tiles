import { foodObjects } from "./images"
import tileSize from "./tileSize"

/**
 * Generates a multidimensional array with a row length based on the current screen width.
 * Must be an even length from 4 to 26.
 * 
 * @param {Array} array 
 */
const createMultidimensionalArray = array => {
    const length = array.length

    //ensure length is acceptable
    if(length < 4 || length > (foodObjects.length*2) || length % 2 !== 0) throw new Error(`Array must have an even length of 4 to 26 : found ${length}`)
    
    // get the width of the screen
    const screenWidth = window.innerWidth

    // get the number of elements per row at a maximum of 6 tiles per row based on the width of the screen and 2 times the tile size 
    const elementsPerRow = Math.min(Math.floor(screenWidth / (tileSize * 2)), 6)

    // get rows based on the number of elements divided by how many elements can be on that row with a minimum of 2
    const rows = Math.max(2, Math.ceil(length / elementsPerRow))

    //create the multidimensional array
    const result = []
    
    //how many columns do we need for the rows
    const baseCols = Math.floor(length / rows)

    //how many extra tiles do we need to add
    const remainder = length%rows

    let start = 0
    for(let i = 0; i < rows; i++) {
        const end = start + baseCols + (i<remainder ? 1 : 0)
        result.push(array.slice(start, end))
        start = end
    }

    return result
}

export default createMultidimensionalArray