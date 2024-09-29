import createMultidimensionalArray from '../helpers/createMultidimensionalArray'
import { fruitObjects } from '../helpers/images'
import shuffle from './shuffle'

const generateImageArray = count => {
    if(count < 2) throw new Error(`You cannot generate an array of less than 2 : found ${count}`)
    if(count > fruitObjects.length) throw new Error(`You cannot generate an array of more than ${fruitObjects.length} : found ${count}`)

    const copiedFruites = fruitObjects.slice(0, count)

    const shuffledArray = shuffle([...copiedFruites, ...copiedFruites])

    return createMultidimensionalArray(shuffledArray)
}

export default generateImageArray