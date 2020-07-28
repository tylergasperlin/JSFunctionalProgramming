let arr = [1,2,3,4,5];

// These functions all create a new array == avoid mutation

// accumulator ongoing result as each element is passed into this function. Whatever we do with this is brought to the next function
// elem is the element of the array
let total = arr.reduce(function(accumulator, elem){
    // returns value from accumulator 
    return accumulator + elem
}, 0) // 0 is initial value of accumulator

//map get new array based on the existing array
//  array = the original array
let newAray = arr.map(function(val, index, array) {
    return val ** 2
})

// must pass in predicate function == must return true or false
let filterArray = arr.filter(function(val) {
    // if true it will be returned in the array 
    // if false will not
    return val < 3
})

