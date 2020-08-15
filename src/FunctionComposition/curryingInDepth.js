function curry(fn,arity = fn.length) {
    return (function nextCurried(prevArgs){
        return function curried(nextArg){
            var args = [ ...prevArgs, nextArg ];
            if (args.length >= arity) {
                return fn( ...args );
            }
            else {
                return nextCurried( args );
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


const newFun = pipe (
    curry(ffun)(1)(2),
    curry(gfun)(4),
    curry(hfun)(5)(6));




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
    doubleNum,
    curry(totalIt)(3)(2)(1),
    curry(doArray)(50));








