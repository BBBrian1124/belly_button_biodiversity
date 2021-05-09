// d3.selectAll is used to look for changes to the html body tag and calls the updatePage function when change
d3.selectAll("body").on("change", updatePage);

function updatePage() {
    // using d3.SelectAll select the #selectOption ID from the html file 
  var dropdownMenu = d3.selectAll("#selectOption").node();
    // the ID of the dropdown menu is assigned to a variable 
  var dropdownMenuID = dropdownMenu.id;
    // the value chosen is assigned to a variable 
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};

console.log(d3.selectAll("#menu").node().id);