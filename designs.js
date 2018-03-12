//I am console.logging everything so open your console!
// Getting color & size input
const color = document.getElementById("colorPicker");
const height = document.getElementById("inputHeight"); //table rows
console.log(height);
const width = document.getElementById("inputWeight"); //table columns
// Select the table
const table = document.getElementById("pixelCanvas");
// Select the submit button
const button = document.getElementById("submitButton");

// When size is submitted by the user, call makeGrid() with event listener
button.addEventListener("click", function(evt){
    evt.preventDefault();
    makeGrid(table, height, width);
})

// Construct the table with a loop for rows, and a nested loop for columns
function makeGrid(table, height, width) {
    height= height.value; //set the current value
    width= width.value; // set the current value
   // color= color.value; // set the current value
    table.innerHTML = ""; // clear the board each time the button is pressed
    
    for( var i = 0; i < height; i++ ){
        const tr = document.createElement("tr"); // make a tr element
        table.appendChild(tr);
        for( let j = 0; j < width; j++ ){
            const td = document.createElement("td"); // make a td element
            tr.appendChild(td);
        }
   }
// When a cell is clicked by the user, place the selected color with event listener
    console.log(color.value);

    table.addEventListener("click", function(evt){
        evt.preventDefault();
// the if condition in for making sure the td is targeted. 
// Without it, sometimes whole rows or the whole canvas gets painted randomly!
        if (evt.target.nodeName==="TD"){
//this automatically targets the td because of the .target property, so no need for selecting the cell!
        evt.target.style.backgroundColor=color.value;
        console.log ("click!");
        }
    })
}

/*
function addEventListenerToAllTds() {
  const tds = document.querySelectorAll('td');
  
  for (const td of tds) {
    td.addEventListener('click', changeColor);
  }
}

function changeColor(event) {
  console.log(event)
  event.target.classList.toggle('red');
}

addEventListenerToAllTds()

*/