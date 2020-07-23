
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