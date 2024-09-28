const shuffle = (array) => {
    const returnArray = []

    while(array.length > 0){
        //get random index
        const index = Math.floor(Math.random() * array.length)

        returnArray.push(array.splice(index, 1)[0])
    }

    return returnArray
}

export default shuffle