
// the slice function returns the values in an array within a starting index upto but not inclding the end index
console.log("SLICE FUNCTION")
// slice and return the first 2 values, or index 0 upto but not including index 2 (i.e. 0, 1)
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1)

// you can also omit the end value to slice to the end 
var sliceWords = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice2 = sliceWords.slice(3, );
console.log(slice2)