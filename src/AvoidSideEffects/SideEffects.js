

// This has side effects
// A function has side effects if it modifies something outside the scope of the function
let cnt = 0;

let incrementWithSideEffect = function() {
    cnt ++;
    return cnt
}

// This function does not have any side effects since it does not modify a global variable
// Everything that is affected should be inside the scope of the function
// Pure function
let incrementWithoutSideEffect = function(num) {
    return num + 1
}


