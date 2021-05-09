console.log("FILTER FUNCTION")
// .filter: also takes a function and applies it to an array returning a new array based on the values 
    // that meet that criteria 

// this passes the array to the .filter function which has a function that checks for even #s using mod
let nums = [12, 15, 24, 34, 45]
let evenNumbers = nums.filter(number => number % 2 == 0)
console.log(evenNumbers)

// this passes the array to the .filter function which has a function that checks if the # > 1 
var largeNumbers = [1,2,3,4,5];
var larger = largeNumbers.filter(function(num){
    return num > 1;
});
console.log(larger);

// we can also use .filter on words, here we will pass the function to find which begin with 's'
var animals = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sBegin = animals.filter(animal => animal.startsWith("s"))
console.log(sBegin);

// .sort essentially calculates a - b, and if b is greater then it stays in the order, 
    // otherwise the elements are reversed
// by default it shows as smallest to largest, but we can add .reverse to change that 
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge.reverse())