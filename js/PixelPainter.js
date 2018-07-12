
// Main Body
var painterBody = document.getElementById('pixelPainter');
var canvasBody = document.createElement('div');
canvasBody.className = "canvasBody";
painterBody.appendChild(canvasBody);
var pixelRow = document.createElement("div");
var painterCanvas = document.createElement('div');
var paletteCanvas = document.createElement('div');
painterCanvas.innerHTML = "<br>";

var mainBtns = document.createElement('div');
mainBtns.className = "mainBtns";
painterBody.appendChild(mainBtns);

//Fill, Erase, Clear, Save, Load

const fillBtn = document.createElement("div");
    fillBtn.className = "fillBtn"
    fillBtn.innerHTML = "Fill";
    mainBtns.appendChild(fillBtn);

const eraseBtn = document.createElement("div");
    eraseBtn.className = "eraseBtn"
    eraseBtn.innerHTML = "Erase";
    mainBtns.appendChild(eraseBtn);
    
const clearBtn = document.createElement("div");
    clearBtn.className = "clearBtn"
    clearBtn.innerHTML = "Clear";
    mainBtns.appendChild(clearBtn);        

const saveBtn = document.createElement("div");
    saveBtn.className = "saveBtn"
    saveBtn.innerHTML = "Save";
    mainBtns.appendChild(saveBtn);        

const loadBtn = document.createElement("div");
    loadBtn.className = "loadBtn"
    loadBtn.innerHTML = "Load";
    mainBtns.appendChild(loadBtn);    

    

// Create canvas function with the height and width parameters
function canvasGrid(x, y) {

  for(var i = 0; i < x; i++) { 
    pixelRow.className = "pixelRow";
    painterCanvas.className = 'painterCanvas';
    painterCanvas.appendChild(pixelRow);
    painterBody.appendChild(painterCanvas);

    for(var j = 0; j < y; j++) {
      var canvasCell = document.createElement("div");
      canvasCell.className = "canvasCell";
      pixelRow.appendChild(canvasCell);
    }
  }
}


// Create canvas function with the height and width parameters
function paletteGrid(x, y) {

  for(var i = 0; i < x; i++) {
    var paletteRow = document.createElement("div");    
    paletteRow.className = "paletteRow";
    paletteCanvas.className = 'paletteCanvas';  
    paletteCanvas.appendChild(paletteRow);
    painterBody.appendChild(paletteCanvas);

    for(var j = 0; j < y; j++) {
      var paletteCell = document.createElement("div");
      paletteCell.className = "paletteCell";
      paletteRow.appendChild(paletteCell);
    }
  }
}

paletteGrid(4,5);
canvasGrid(15,15);
////////////////////////////////////////////////////////////

