// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest






// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


// **** Answer must remove orginal array's first element and shuffle them in a random order
describe ("kickAndShuffle", () => {
    it (" Orginal array element removed, contents are shuffled in any order. ", () => {
        expect ( kickAndShuffle(colors1) ).toEqual( expect.arrayContaining(["yellow", "blue", "pink", "green"]) )
        expect ( kickAndShuffle(colors2) ).toEqual( expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]) )
    })
})



// Good Failure:
// FAIL  ./code-challenges.test.js
// kickAndShuffle
//   ✕  Orginal array element removed, contents are shuffled in any order. 
// ● kickAndShuffle ›  Orginal array element removed, contents are shuffled in any order. 
//   ReferenceError: kickAndShuffle is not defined



// b) Create the function that makes the test pass.

// Pseudocode:
// Declare a function called kickAndShuffle
// Input is an array
// Output is a modified array
    // Modification: (1) removing value at zeroth index, (2) shuffling all elements 
        // .shift() permanetly modifies an arrau, so lets create a container varible
        // new_array is the container for the parameter array
            // Didn't work as planned ???? as the orginal array is altered everytime
        // .sort() is normally used to 



    const kickAndShuffle = (array) => {
        
    let newArray = array

        newArray.shift()

        return newArray.sort( () => {
            0.5 - Math.random()
        })
    }

    // const sort = (array) => {
    //     return array.sort( (a) => {
    //         a = 0.5
    //         a - Math.random()
    // })}

// Huh..... the function is a one time use, it somehow modifies the arguement every single time, so its not redeployable at all
// And even then... Math.random uses a number to reassign a letter... which i don't think is a thing
// this is stumping me a too long,,,,,

//  PASS  ./code-challenges.test.js
//   kickAndShuffle
//   ✓  Orginal array element removed, contents are shuffled in any order.  (2 ms)




// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

describe ("netVotes", () => {
    it (" Turning properties in an object to numbers, subtracting downVotes to upVotes ", () => {
        expect ( netVotes(votes1) ).toEqual(11)
        expect ( netVotes(votes2) ).toEqual(-31)
    })
})

// GOOD FAIL  ./code-challenges.test.js
// netvotes
//     ✕  Turning properties in an object to numbers, subtracting downVotes to upVotes  (1 ms)
// ● netvotes ›  Turning properties in an object to numbers, subtracting downVotes to upVotes 
// ReferenceError: kickAndShuffle is not defined



// b) Create the function that makes the test pass.

// PseudoCode:
// Declare a function called netVotes
// Input is a object with properties called upVotes and downVotes
// Output is a number
// Logic: we are going to reference the properties in the object with dot notation; when we do we get a value associated with the key
// we then will subtract the values to get the total votes and return that


const netVotes = (object) => {    
    let total = object.upVotes - object.downVotes
    return total 
}

// PASS  ./code-challenges.test.js
// netVotes
//   ✓  Turning properties in an object to numbers, subtracting downVotes to upVotes  (1 ms)



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.


const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// a) Create a test with an expect statement using the variables provided.


describe ("noDupes", () => {
    it (" Receives 2 arrays return 1 array with no reoccuring values ", () => {
        expect ( noDupes(dataArray1, dataArray2) ).toEqual( ["array", "object", "number", "string", "Boolean", "null", "undefined"] )
    })
})

// Good Failure
// FAIL  ./code-challenges.test.js
// noDupes
// ✕  Turning properties in an object to numbers, subtracting downVotes to upVotes 
// ● noDupes ›  Receives 2 arrays return 1 array with no reoccuring values
// ReferenceError: noDupes is not defined

// b) Create the function that makes the test pass.

//PseudoCode:
// Declare a function called noDupes
// Input is 2 arrays
    // That we will concat with .concat(), the result should look like this ==>  array1.concat(array2)
        // We also need to store this too with a container
// Output is 1 array with no deplicates
    // .indexOf() indicates the first instance of a value, we'll compare that to the current index of that same value; this will help in removing dupes!

const noDupes = (array1, array2) => {
    combinedArray = array1.concat(array2)
    uniqueArray = []
    combinedArray.map ((value, index) => {
        if (combinedArray.indexOf(value) === index) {
            return uniqueArray.push(combinedArray[index])
        } else {

        }

    })

    return uniqueArray

}

// successsss
// PASS  ./code-challenges.test.js
// kickAndShuffle
// ✓  Orginal array element removed, contents are shuffled in any order.  (4 ms)
// netVotes
// ✓  Turning properties in an object to numbers, subtracting downVotes to upVotes  (1 ms)
// noDupes
//     ✓  Receives 2 arrays return 1 array with no reoccuring values

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.334 s
// Ran all test suites.
// ✨  Done in 1.16s.
