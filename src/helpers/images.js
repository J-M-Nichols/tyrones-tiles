import food00 from '../images/food/food00.png'
import food01 from '../images/food/food01.png'
import food02 from '../images/food/food02.png'
import food03 from '../images/food/food03.png'
import food04 from '../images/food/food04.png'
import food05 from '../images/food/food05.png'
import food06 from '../images/food/food06.png'
import food07 from '../images/food/food07.png'
import food08 from '../images/food/food08.png'
import food09 from '../images/food/food09.png'
import food10 from '../images/food/food10.png'
import food11 from '../images/food/food11.png'
import food12 from '../images/food/food12.png'
import food13 from '../images/food/food13.png'
import food14 from '../images/food/food14.png'
import food15 from '../images/food/food15.png'
import food16 from '../images/food/food16.png'
import food17 from '../images/food/food17.png'
import food18 from '../images/food/food18.png'
import food19 from '../images/food/food19.png'
import food20 from '../images/food/food20.png'
import food21 from '../images/food/food21.png'
import food22 from '../images/food/food22.png'
import food23 from '../images/food/food23.png'
import food24 from '../images/food/food24.png'
import food25 from '../images/food/food25.png'
import food26 from '../images/food/food26.png'
import food27 from '../images/food/food27.png'
import food28 from '../images/food/food28.png'
import food29 from '../images/food/food29.png'
import food30 from '../images/food/food30.png'
import food31 from '../images/food/food31.png'
import food32 from '../images/food/food32.png'
import food33 from '../images/food/food33.png'
import food34 from '../images/food/food34.png'
import food35 from '../images/food/food35.png'
import food36 from '../images/food/food36.png'
import food37 from '../images/food/food37.png'
import food38 from '../images/food/food38.png'
import food39 from '../images/food/food39.png'
import food40 from '../images/food/food40.png'
import food41 from '../images/food/food41.png'
import food42 from '../images/food/food42.png'
import food43 from '../images/food/food43.png'
import food44 from '../images/food/food44.png'
import food45 from '../images/food/food45.png'
import food46 from '../images/food/food46.png'
import food47 from '../images/food/food47.png'
import food48 from '../images/food/food48.png'
import food49 from '../images/food/food49.png'
import food50 from '../images/food/food50.png'
import food51 from '../images/food/food51.png'
import food52 from '../images/food/food52.png'
import food53 from '../images/food/food53.png'
import food54 from '../images/food/food54.png'
import food55 from '../images/food/food55.png'
import trees from '../images/trees.png'
import tyroneHurt from '../images/TyroneHurt.gif'
import tyroneRunning from '../images/TyroneRunning.gif'
import fireworkYellow from '../images/fireworkYellow.gif'
import fireworkPink from '../images/fireworkPink.gif'
import fireworkPurple from '../images/fireworkPurple.gif'

export const foodImages = [
    food00,
    food01,
    food02,
    food03,
    food04,
    food05,
    food06,
    food07,
    food08,
    food09,
    food10,
    food11,
    food12,
    food13,
    food14,
    food15,
    food16,
    food17,
    food18,
    food19,
    food20,
    food21,
    food22,
    food23,
    food24,
    food25,
    food26,
    food27,
    food28,
    food29,
    food30,
    food31,
    food32,
    food33,
    food34,
    food35,
    food36,
    food37,
    food38,
    food39,
    food40,
    food41,
    food42,
    food43,
    food44,
    food45,
    food46,
    food47,
    food48,
    food49,
    food50,
    food51,
    food52,
    food53,
    food54,
    food55
]

export const foodArray = Array.from({ length: foodImages.length - 1 }, (_, index) => index + 2)

export const foodObjects = foodImages.map((element, index)=>{
    return {
        img: element,
        flipped: false,
        type: index
    }
})

export const treesImage = trees

export const tyroneHurtImage = tyroneHurt

export const tyroneRunningImage = tyroneRunning

export const tyroneIdleImage = `${process.env.PUBLIC_URL}/Tyrone.gif`

export const fireworks = [
    fireworkPink,
    fireworkPurple,
    fireworkYellow
]