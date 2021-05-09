// 12.3.1: Inspect an API call with D3.json()
// define the url for our api call 
const url = "https://api.spacexdata.com/v2/launchpads";

// using d3.json we can call the api and retreive the data and print it into our console 
// The .then() method ensures that the data is received before executing the arrow function/next code
d3.json(url).then(receivedData => console.log(receivedData));

// since the data is stored within a json array, we can call the index value [0] as well as the property (.full_name)
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// some of the elements are within other objects, so we need to use the dot notation to drill down
// i.e. from the [0] index, into location table, into the latitude value 
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));


// Use map() to print only the latitude and longitude coordinates of each SpaceX launch station.
// use d3.json.then to obtain the data from our api url 
// pass the function to that data which uses .map which loops through the data and apllies a function
// when looping through the data, we obtain the latitude and longitude and store it in a variable 
// we then place it into an array and print it 
d3.json(url).then(spaceXResults =>
    spaceXResults.map(function(result){
        var lat = result.location.latitude;
        var long = result.location.longitude;
        var loc = [lat, long];
        console.log(loc);
    }));


// 12.3.2: Load a JSON file with D3.json()
// instead of obtaining the json data from the API or url, we can obtain it from a local file 'samples.json'
d3.json("samples.json").then(function(data){
    console.log(data);
});
// if we just try to run this code as is we will receive an error when opening our html file in the browser
// the reason is there is a CORS request error, which means that a local server must be ran to load
    // an external file into a JavaScript file
// in order to fix this open your command prompt and navigate to this folder directory and run
    // python -m http.server
    // it will create a local hosted server found at: localhost:8000 where you can view the file properly 
// once we look at the data in our browser we see metadata array contains objects, 
    // each of which contains details of a volunteer, such as age, location, ethnicity, ID number, 
    // and weekly washing frequency of the belly button.

// we want to obtain the frequency of weekly belly washes in descending order 
// we can use .map to loop through each data and extract just the person.wfreq property from the data.metadata table
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
// using .sort we filp the formula to b - a so that it shows descending rather than the default a - b which is asc
person.wfreq).sort((a,b) => b - a);
// using .filter we can filter to only include values that are not equal to null 
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// within the names array we just see an array of volunteer IDs 
// within the samples array we see:
    //id referring to the ID number 
    //otu_IDs refers to the list of IDs of the bacteria found in the person 
    //otu_labels refers to bacteria names 

// the end goal is to be able to select the person's ID and return their information
// as a starting point, here is how we would obtain the data for a specific index 
// first we obtain the data 
d3.json("samples.json").then(function(data){
    // once we obtain the data we define the first person as the 0th index of the metadata table
    firstPerson = data.metadata[0];
    // recall the object.entries method access an object (i.e. firstPerson) key and value 
    // recall for each accesses each element of the array, so we are accessing each key and value for that index
    Object.entries(firstPerson).forEach(([key, value]) =>
    // print out the key and value 
    {console.log(key + ': ' + value);});
});