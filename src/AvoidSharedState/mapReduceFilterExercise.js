export const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

export const removeScores = (scores) => {
    const filterLessThan100 = scores.filter(item => {
    return item<100
    })

    const filterMoreThan0 = filterLessThan100.filter(item => {
        return item > 0
    })

    const filterLessThan10 = filterMoreThan0.filter(item => {
        return item < 10
    })

    const multiplyByTenThoseLessThan10 = filterLessThan10.map(item =>{
        return item * 10
    })
    

    const returnScore = []
    returnScore.push(...filterMoreThan0)
    returnScore.push(...multiplyByTenThoseLessThan10)

    const sumScores = returnScore.reduce((accum, item ) => {
        console.log(item)
        return accum + item
    },0)

    return returnScore
    
}

