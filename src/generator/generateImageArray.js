import createMultidimensionalArray from '../helpers/createMultidimensionalArray'
import { foodObjects } from '../helpers/images'
import shuffle from './shuffle'

const generateImageArray = count => {
    if(count < 2) throw new Error(`You cannot generate an array of less than 2 : found ${count}`)
    if(count > foodObjects.length) throw new Error(`You cannot generate an array of more than ${foodObjects.length} : found ${count}`)
    
    const copiedFruites = shuffle([...foodObjects]).slice(0, count)

    const shuffledArray = shuffle([...copiedFruites, ...copiedFruites])

    return createMultidimensionalArray(shuffledArray)
}

export default generateImageArray