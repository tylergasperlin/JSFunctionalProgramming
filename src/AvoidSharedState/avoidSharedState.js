
export let obj = {
    fName: 'Steven',
    lName: 'Hancock',
    score: 65,
    completion: true,
}

export let obj0 = {
    fName: 'Steven',
    lName: 'Hancock',
    score: 65,
    completion: true,
    questions: {
        q1: {success: true, value: 1},
        q2: {success: false, value: 1}
    }
}


// Since we use object.assign() we make a copy of an object
// If you set obj2 = obj directly, obj 1 will change when calling changeObj2 due to objects being passed by reference
export const assignObject = (obj) => Object.assign({}, obj);

// Note that none of these share state with the object above :)
export const getObj = (obj) => obj

export const getObj2 = (obj2) => obj2

export const changeObj2 = (obj2) => {
    obj2.score = 90
    return obj2
} 

export const changeDeepObject = (obj) => {
    obj.questions.q1.value = 10
    return obj
}