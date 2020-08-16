
// param fn =  this function accepts a function
// param arity = number of arguments that can be acceptd
function curry(fn, arity = fn.length) {
    // this function is immediately invoked
    // Note that we can call nextCurried outside of where it is defined because it has closure
    return (function nextCurried(prevArgs){
        // The function returns a function 
        // The function below has closure over the immediatly invoked function
        return function curried(nextArg){
            var args = [ ...prevArgs, nextArg ];
            if (args.length >= arity) { // we have access to arity and fn due to closure
                return fn( ...args ); // this calls the function that was supplied with all arguments it needs
            }
            else { // if we do not have all arguments we need we call the next function
                return nextCurried( args ); // we can call this function outside of the function because it has closure
            }
        };
    })( [] ); 
}

const pipe = function(...fns) {
    return function(x) {
        return fns.reduce(function(v, f) {
            return f(v);
        }, x);
    }
};

const compose = function(...fns) {
    return function(x) {
        return fns.reduceRight(function(v, f) {
            return f(v);
        }, x);
    }
};



const ffun = function(a, b, c) {
    return a + b + c;
};

const gfun = function(d, e) {
    return d + e;
};

const hfun = function(f, g, h) {
    return f + g + h;
};

///////////APPROACH 1//////////////
const curriedF = curry(ffun);
const curriedG = curry(gfun);
const curriedH = curry(hfun);

const newFun2 = pipe (
    // The last argument is used to pass the results of the last function
    //pass in 1 as a. This returns a function which then accepts 2
    // pass in 2 as b
    curriedF(1)(2),
    curriedG(4), // pass in 4 as d
    curriedH(5)(6)); //pass in 5 as f and 6 as g


/////////////APPROACH 2//////////////


export const newFun = pipe (
    // Same thing as approach 1 but we do not need to create the curry function first
    curry(ffun)(1)(2),
    curry(gfun)(4),
    curry(hfun)(5)(6));


///////////////ANOTHER EXAMPLE///////////////

// THIS DOES NOT NEED TO BE CURRIED BECAUSE THERE IS ONLY ONE PARAM
const doubleNum = function(num) {
    return num + num;
};

const totalIt = function(n1, n2, n3, n4) {
    return n1 + n2 + n3 + n4;
};

const doArray = function(num1, num2) {
    return [num1, num2];
};

const newFunction = pipe(
    doubleNum, // DOES NOT NEED TO BE CURRIED
    curry(totalIt)(3)(2)(1), // curry(totalIt) is a curried function and the result is a curried function. This is invoked three times in this example
    curry(doArray)(50));








