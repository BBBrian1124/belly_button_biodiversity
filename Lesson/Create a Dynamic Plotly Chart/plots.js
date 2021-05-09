// function to create an initial visualization 
function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
    Plotly.newPlot("plot", data);
  };
  
  // using d3.selectAll look for a change on the #dropdownMenu ID and run the updatePlotly function when detected
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    // the dropdown menu id (dropdownMenu) is placed as a variable 
    var dropdownMenu = d3.select("#dropdownMenu");
    // obtain the "value" of the id (i.e. dataset1 or dataset2) 
    var dataset = dropdownMenu.property("value");
  
    // initialize the x axis 
    var xData = [1, 2, 3, 4, 5];
    // lnitialize a blank y axis array
    var yData = [];
  
    // check what is the dataset chosen (i.e. the menu value) and pass that to the y axis  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
    // create an array to store the x and y axis/values
    var trace = {
      x: [xData],
      y: [yData],
    };
    // use plot.restyle to pass the html tag and values for the chart 
    // .restyle modifies the previously displayed chart with the updated information 
      // rather than creating a new one like .newplot
    Plotly.restyle("plot", trace);
  };
  
  init();