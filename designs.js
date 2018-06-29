// Select color input
var color = document.querySelector('#colorPicker');

// Select size input
var height = document.querySelector('#inputHeight');
var width = document.querySelector('#inputWidth');

// Select the container that holds the heihth and width inputed
var sizePicker = document.querySelector('#sizePicker');

//Create and select the table
var canvas = document.querySelector("#pixelCanvas");

// When size is submitted by the user, call makeGrid()

function makeGrid() {
//clear the previous table before creating a new one   
canvas.innerHTML = '';

// Creating the table using for loop. First we create td, append to tr, create tr and append to table.
// console.log(canvas)
  
 while(canvas.innerHTML === '') {
    for(var r = 0; r < height.value; r++){
        var tr, td;
      tr = document.createElement('tr');
           canvas.appendChild(tr);
           for (var c = 0; c < width.value; c++){
             td = document.createElement('td');
               tr.appendChild(td);
           }
      }
  }
  
  canvas.addEventListener('click', function (e){
    e.preventDefault();
    if (e.target.nodeName === 'TD'){
        e.target.style.backgroundColor = color.value;

    }
})
}
// Call makeGrid() when the user submits the grid size by clicking on the submit button
sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
 // console.log('aye')
   makeGrid();
})


// Your code goes here!

  
//}

