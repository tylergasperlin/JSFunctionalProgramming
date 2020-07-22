
// Data - do not modify this directly!
export var usersDara = [
    {name: "James",score: 30,tries: 1}, 
    {name: "Mary", score: 110,tries: 4}, 
    {name: "Henry",score: 80,tries: 3}
];

// Modify data // Note that javascript object stores are referenced to the original object
export const storeUser = (users, userToReplace, userNumber) => {
    users[userNumber] = userToReplace
    console.log(users)
    return users

}


// Pure functions
export const selectUser = (users, currentUser) => {
    return users[currentUser];
}

// This modifies the user that was passsed in instead of a global variable
export const updateScore = (currentUser, newScore) => {
    currentUser.score = newScore;
    return currentUser
}

// Also modifies user that was passed in 
export const updateTries = (currentUser) => {
    currentUser.tries = currentUser.tries + 1
    return currentUser;
}


