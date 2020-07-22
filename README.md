
# Functional Programming
The process of building software by composing pure functions, avoiding shared state, mutable data, and side effects. 

Functional programming is declarative rather than imperative, and application state flows through pure functions

# 1. Avoid Side Effects & Pure Functions. See AvoidSideEffects > SideEffects.js
- Pure functions -
a. The function depends on the input provided and not on external data that changes 
b. The function doesn't cause side effects. It does not cause changes beyond the scope
c. Given the same output the function will always return the same output

Side Effects Defined
1. Change a value globally (variable, property, data structure)
2. Change the original value of a functions argument (a parameter passed by reference)
3. Throwing an exception
4. Printing to the screen or logging
5. Triggering an external process
6. Invoking other functions that have side effects

You cannot really completely avoid side effects. Functional programming is all about reducing side effects and managing side effects

In javascript you can encounter side effects even if you assign the results of functions as variables. For example you can have an array of objects and you may update the property of one of the objects. Even though you do not update the original object explicitly after this update, when you update the property of the object the object will be updated. This is because javascript passes objects by reference. So when you update the property the reference to the object that is passed causes an update to the object even though you have not explicitly updated the object. 

