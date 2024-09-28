/**
 * must be an even length from 4 to 26
 * 4 : 2 - 2
 * 6 : 3 - 3
 * 8 : 4 - 4
 * 10 : 5 - 5
 * 12 : 4 - 4 - 4
 * 14 : 5 - 5 - 4
 * 16 : 4 - 4 - 4 - 4
 * 18 : 6 - 6 - 6
 * 20 : 5 - 5 - 5 - 5
 * 22 : 6 - 6 - 5 - 5
 * 24 : 6 - 6 - 6 - 6
 * 
 * @param {Array} array 
 */
const createMultidimensionalArray = array => {
    const length = array.length
    //ensure length is acceptable
    if(length < 4 || length > 26 || length % 2 !== 0) throw new Error(`Array must have an even length of 4 to 26 : found ${length}`)
    
    // get rows
    let rows
    if(length < 12) rows = 2
    else if (length < 20 && length !== 16) rows = 3
    else rows = 4

    //create the multidimensional array
    const result = []
    const cols = length / rows
    for(let i = 0; i < rows; i++) {
        result.push(array.slice(i * cols, (i+1) * cols))
    }

    return result
}

export default createMultidimensionalArray