console.log("MAP FUNCTION")

// the map method applies a transformation/function to each element in an array like a for loop

// define the array
var numbers = [1,2,3,4,5];
// call .map on the array and pass the function which takes the num and doubles it then print the results 
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// .map is not limited to numerical functions 
// create an array of words 
let words = ['these', 'words', 'need', 'capatilized']
// pass the array to .maps and user .toUpperCase to capitalize each word then print the results 
let caps = words.map(word => word.toUpperCase())
console.log(caps)

// .map can also be used to extract specific information/properties from an array
// create an array
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];
// use .map to return the city property from the cities array, we can return any other property as well
var cityNames = cities.map(function(array){
    return array.City;
});
console.log(cityNames);