import createMultidimensionalArray from '../helpers/createMultidimensionalArray'
import fruit01 from '../images/01.png'
import fruit02 from '../images/02.png'
import fruit03 from '../images/03.png'
import fruit04 from '../images/04.png'
import fruit05 from '../images/05.png'
import fruit06 from '../images/06.png'
import fruit07 from '../images/07.png'
import fruit08 from '../images/08.png'
import fruit09 from '../images/09.png'
import fruit010 from '../images/10.png'
import fruit011 from '../images/11.png'
import fruit012 from '../images/12.png'
import fruit013 from '../images/13.png'
import shuffle from './shuffle'

const fruits = [
    {
        img: fruit01,
        flipped: false,
        type: 0
    },
    {
        img:fruit02,
        flipped: false,
        type: 1
    },
    {
        img:fruit03,
        flipped: false,
        type: 2
    },
    {
        img:fruit04,
        flipped: false,
        type: 3
    },
    {
        img:fruit05,
        flipped: false,
        type: 4
    },
    {
        img:fruit06,
        flipped: false,
        type: 5
    },
    {
        img:fruit07,
        flipped: false,
        type: 6
    },
    {
        img:fruit08,
        flipped: false,
        type: 7
    },
    {
        img:fruit09,
        flipped: false,
        type: 8
    },
    {
        img:fruit010,
        flipped: false,
        type: 9
    },
    {
        img:fruit011,
        flipped: false,
        type: 10
    },
    {
        img:fruit012,
        flipped: false,
        type: 11
    },
    {
        img:fruit013,
        flipped: false,
        type: 12
    },
]

const generateImageArray = count => {
    if(count < 2) throw new Error(`You cannot generate an array of less than 2 : found ${count}`)
    if(count > fruits.length) throw new Error(`You cannot generate an array of more than ${fruits.length} : found ${count}`)

    const copiedFruites = fruits.slice(0, count)

    const shuffledArray = shuffle([...copiedFruites, ...copiedFruites])

    return createMultidimensionalArray(shuffledArray)
}

export default generateImageArray