
const curryGreeting = function(greeting) {
    // This function has access to the out function's scope
    // Creates closure over the greeting variable
    return function(name) {
        console.log('==================CURRYING===============')
        console.log(greeting + " " + name);
    };
};

export const welcomeGreet = curryGreeting("Welcome");

// Closure can be used to return a function that has reduced arity
// Returned function has closure over any values that were previously given
// Return function from another function = higher order function