// Code your solution here
//  function findMatching(array, string){
//     return array.filter(
//         str => str.toLowerCase() === string.toLowerCase()
//     );
// }

// function fuzzyMatch(array, fuzzyString){
//     return array.filter(
//         str => str.indexOf(fuzzyString) === 0
//     )
// }

// function matchName(array, matchedName){
//     return array.filter(
//         (home) => home.name === matchedName
//     )
// }

function findMatching (array, string) {
    return array.filter(
        str => str.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch (array, string){
    return array.filter(
        str => str.charAt(0) === string.charAt(0)
    )
}

function matchName (array, string) {
    return array.filter(
        str => str.name === string
    )
}