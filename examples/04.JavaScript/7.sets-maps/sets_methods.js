
/* Intersection: 
   - Returns a new set with elements that are common to both sets.
*/
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);

console.log(odds.intersection(squares)); // Set(2) { 1, 9 }    

/* Union:
   - Returns a new set with all elements from both sets.
*/
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]);
console.log(union); // Set(5) { 1, 2, 3, 4, 5 }

/* Difference:
   - Returns a new set with elements in the first set that are 
    not in the second.
*/

console.log(odds.difference(squares));    // Set(3) { 3, 5, 7 } 

/* has:
   - Returns true if the set contains the element.
   - O(1) time complexity for lookups, making them significantly 
    faster than Arrays for checking if an element exists
*/
const set = new Set(['apple', 'banana', 'orange']);
console.log(set.has('banana'));    // true