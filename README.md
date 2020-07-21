
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
2. Change the original value of a functions argument
3. Throwing an exception
4. Printing to the screen or logging
5. Triggering an external process
6. Invoking other functions that have side effects

You cannot really completely avoid side effects. Functional programming is all about reducing side effects and managing side effects

