// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';

// loop over the grid by rows
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        //loop cell by cell
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    //add grid to table element
    table.innerHTML = grid;

    // Add an event to recognise click in the cell
    addClickEventToCells();
}

//accept height and width to call makeGrid
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);    
}

// add click events to cells in the grid
function addClickEventToCells() {
    // when a colour is selected then return the colour
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}

// on submit of form get sizePicker
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};

// Start with a default 8x8 grid.
makeGrid(8, 8);
