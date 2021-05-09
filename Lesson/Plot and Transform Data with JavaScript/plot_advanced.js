// Print out our data.js array to view it
console.log(cityGrowths);

// Sort the cities in descending order of population growth.
// using .sort we can sort based on a particular property within our array 
// use .reverse to sort by largest to smallest 
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
console.log(sortedCities)

// Select only the top five cities in terms of growth.
// use .slice to return the first 5 index values of our sorted array 
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// Create separate arrays for the city names and their population growths.
// use.map to extract specific properties from our topFiveCities array generated above
var topFiveCityNames = topFiveCities.map(city => city.City);
// use parseInt to convert string into an int
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// Use Plotly to create a bar chart with these arrays.
// define the x and y values for our chart data and the chart type
var chartData = [{
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: 'bar'
}];
// create the layout for the chart 
var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: { title: "City" },
  yaxis: { title: "Population Growth, 2016-2017"}
};
// pass the html location, chart data and layout to the newPlot function 
Plotly.newPlot("plotAdvanced", chartData, layout);