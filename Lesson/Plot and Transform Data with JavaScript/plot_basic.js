// LINE GRAPH
//.newplot plots the graph
// plotLine is the ID in our html file that tells us where to plot to 
// within the brackets is our data passed to the x and y values
Plotly.newPlot("plotLine", [{x: [1, 3 , 5 , 7, 9], y: [20, 10, 30, 90, 50]}]);


// BAR GRAPH
// alternativaly, we can create a variable/object with an array to pass to newplot
// by adding the type, we can plot a bar graph in a different location 
var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
}];
// we can also add an object that contains the layout details 
// we will pass the labels for the axis using key/value pairs 
var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
// the newplot function now takes 3 arguments: the html ID to display the chart, the chart data, and layout/design
Plotly.newPlot("plotBar", trace, layout);


// PIE CHARTS
// Since pie charts don't have x or y axis, we need to pass it as labels and values, and define the type as pie
var pieData = [{
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
}];
// Create an object to store the chart layout/titles 
var pieLayout = {
    title: "Popular Drinks by %",
};
// Pass the plot location, chart data, and layout to the newplot function
Plotly.newPlot("plotPie", pieData, pieLayout);
