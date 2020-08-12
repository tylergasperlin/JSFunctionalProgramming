
# Functional Programming
The process of building software by composing pure functions, avoiding shared state, mutable data, and side effects. 

Functional programming is declarative rather than imperative, and application state flows through pure functions

# 1. Avoid Side Effects & Pure Functions. See AvoidSideEffects > SideEffects.js
- Pure functions -
1. The function depends on the input provided and not on external data that changes 
2. The function doesn't cause side effects. It does not cause changes beyond the scope
3. Given the same output the function will always return the same output

- Side Effects Defined -
1. Change a value globally (variable, property, data structure)
2. Change the original value of a functions argument (a parameter passed by reference)
3. Throwing an exception
4. Printing to the screen or logging
5. Triggering an external process
6. Invoking other functions that have side effects

You cannot really completely avoid side effects. Functional programming is all about reducing side effects and managing side effects

In javascript you can encounter side effects even if you assign the results of functions as variables. For example you can have an array of objects and you may update the property of one of the objects. Even though you do not update the original object explicitly after this update, when you update the property of the object the object will be updated. This is because javascript passes objects by reference. So when you update the property the reference to the object that is passed causes an update to the object even though you have not explicitly updated the object. 

# 2. Avoiding Shared State
1. A program is considered stateful if it is designed to remember data from events or user interactions. The remembered information is called the state of the program

2. A javascript program stores data in variables and objects. The contents of these storage locations at any given moment while the program is running is considered its state.

3. Shared state is any variable, object, or memory space that exists in a shared scope, or as property of an object being passed between scopes. A shared scope can include global scope or closure scopes. 

In JS when you pass an object, you are passing a reference to that object. When you update the reference you update the object. This is a shared scope.

Shared state is not good because you have to know the history of its variables and all functions that effect them.

The state of our program should be passed through pure functions. State should not be shared. 

Pass state and clone it.

4. The use of const is an example of immutability. You cannot assign a new value to it. 

If you try and sort an array that was assigned to a const variable, you are able to. This means that const does not completely make the variable immutable. 

If you called Object.freeze() on a const variable an try to sort it, then you will get a console error. This demonstrates a completely immutable variable

Using Object.assign() helps to ensure immmutable data/objects but does not clone deeply nested objects.

Using JSON.stringify() is a better way to make sure an object is immutable 

Sometimes we do not always need to be concerned about immutable data, but in the instanes we intentionally want to ensure data is immutable, these are the techniques that should be used.

------
Spread operator. 

In the previous topic we looked at using Object.assign() to clone an object. This only does a shallow clone as we demonstrated. If we only need a shallow clone of an object, we can also use the spread operator.

The spread operator consists of three dots ... . This operator has several applications, but one application is shallow cloning. For example, if we have the following array:

const arr = [5, 6, 9, 10, 12, 3, 4];

and we would like to clone it, we can do it like this:

const newArray = [...arr];

The spread operator spreads out the elements of the arr array, and then we include them in a new array by surrounding the elements in square brackets.

If we have the following object:

const obj = {
  name: 'Steven',
  eyes: 'blue'
};
we can clone it like this:

const newObj = {...obj};

Once again the spread operator opens up the key value pairs in the object and then we place them in a new object using the curly braces.

So the spread operator is another way to do shallow cloning.

However, it is important to remember that the JSON.parse(JSON.stringify()) method is more flexible and will make sure to do deep cloning, so I usually prefer to use that method.

------

# 3. Function Composition

Funcitons in functional programming
- Functions hand an input
- Functions return a value
- Functions are simplified to a single task

Procedure = checkWorks(string input) = trims => splits into an array => checks length

Turn procedure into function = string input => trimFunction => string output => splitFunction => array output => checkFunction => boolean output

This is how that looks compared to one function procedure
check(splits(trim(str)))

Arity refers to the number of params a function has. If function has one param it has an arity of 1. 

// Closure can be used to return a function that has reduced arity
// Returned function has closure over any values that were previously given
// Return function from another function = higher order function

