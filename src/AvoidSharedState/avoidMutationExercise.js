

export const avoidMutationExercise = () => {
    var users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

    //Modifies Data
    var storeUser = function(arr, user) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
                arr[i] = user;
                break;
            }
        }
    };
    
    //Pure Functions
    var getUser = function(arr, name) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name.toLowerCase() === name.toLowerCase()) {
                return arr[i];
            }
        }
        return null;
    };
    
    var updateScore = function(user, newAmt) {
        const userToUpdate = cloneObject(user)
        if (userToUpdate) {
            userToUpdate.score += newAmt;
            return userToUpdate;
        }
    };
    
    var updateTries = function(user) {
        const userToUpdate = cloneObject(user)
        if (userToUpdate) {
            userToUpdate.tries++;
            return userToUpdate;
        }
    };

    // Without running this function, each time we updateScre or updateTries, the original object would be modified due to mutations and due to objects being passed by ref
    var cloneObject = (objectToClone) => {
        return JSON.parse(JSON.stringify(objectToClone))
    }
    
    console.log('------------------ Avoid Mutation Exercise ------------------')
    // Try running this code without cloneOjbect to see the difference
    let usr = getUser(users, "Henry");
    console.log(usr)
    let usr1 = updateScore(usr, 30);
    console.log(usr1)
    let usr2 = updateTries(usr1);
    console.log(usr2)
    storeUser(usr2);
    console.log(users)
    
}




