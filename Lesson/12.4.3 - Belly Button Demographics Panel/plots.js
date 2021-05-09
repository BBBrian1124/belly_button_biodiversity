function init() {
    // assign the #SelDataset html id to a variable 
    var selector = d3.select("#selDataset");
  
    // use d3.json to read the data from the samples.json file .then move to the next code once retreived 
    d3.json("samples.json").then((data) => {
    // we can print out the data to see what it shows 
      console.log(data);
    // we will notice that the file has a names array which stores the participants IDs
    // using dot notatation we will obtian those values and assign it to a variable
      var sampleNames = data.names;
      // use .forEach to loop through those 'names' or IDs 
      sampleNames.forEach((sample) => {
        // as it is looping through, we are passing to our dropdown menu defined as selector 
        selector
            // appending additional options 
          .append("option")
          // the text to to show for the option is the 'sample' (the item in the loop or the 'name'/id)
          .text(sample)
          // this passes the value for this ID/drop down list as the 'names' or id within our loop 
          .property("value", sample);
      });
  })}
  
  init();

// funciton optionChanged is created to be called by the html file
// the argument newSample refers to the value of the selected menu option in the index.html file 
// we will take that value and pass it into 2 other functions 
function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

// the buildMetadata takes a paramater ('sample') which will be the participant ids 
function buildMetadata(sample) {
    // d3.json pulls in our entire dataset 
    d3.json("samples.json").then((data) => {
        // assigns the metadata array to a variable
        var metadata = data.metadata;
        // use .filter to filter the metadataArray to those where the id matches our specified id 
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        // since the filtered data (resultArray) is returned as an array, we want to obtain the 0th index 
            // from that array
        var result = resultArray[0];
        // this selects the #sample-metdata tag and declares it as a variable
        var PANEL = d3.select("#sample-metadata");
        // this clears the sample-metadata panel so that it can hold our new data 
        PANEL.html("");
        // finally append to the h6 tag the .location property of our result or participant id
        PANEL.append("h6").text(result.id);
        PANEL.append("h6").text(result.ethnicity);
        PANEL.append("h6").text(result.gender);
        PANEL.append("h6").text(result.age);
        PANEL.append("h6").text(result.location);
        PANEL.append("h6").text(result.bbtype);
        PANEL.append("h6").text(result.wfreq);
    });
  }