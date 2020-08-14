// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}


// This function will replace your handleClick function
function updateFilters() {

  let Date = d3.select("#datetime").property("value");
  let City = d3.select("#city").property("value");
  let State = d3.select("#state").property("value");
  let Country = d3.select("#country").property("value");
  let Shape = d3.select("#shape").property("value");

  let filteredData = tableData;
  
  if(Date) {
    filteredData = filteredData.filter(row => row.datetime === Date);

} if (City) {
    filteredData = filteredData.filter(row => row.city === City);

} if (State) {
    filteredData = filteredData.filter(row => row.state === State);

} if (Country) {
    filteredData = filteredData.filter(row => row.country === Country);

} if (Shape) {
      filteredData = filteredData.filter(row => row.shape === Shape);
} 
    
  buildTable(filteredData);
}

function filterTable() {
  let filteredData= tableData;
}


d3.selectAll("#filter-btn").on("click", updateFilters);


// Build the table when the page loads
buildTable(tableData);
