
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

//Buttons - Fill, Erase, Clear, Save, Load

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

///////////////////////////////////////////////////////////////////////////////////////
var colorCodes = ['#CD4A4A','#CC6666','#BC5D58','#FD5E53','#FF7538','#9F8170','#FAA76C',
'#FF8D88','#FFCF48','#FCE883','#BAB86C','#FDFC74','#87A96B','#1DF914','#76FF7A','#6DAE81',
'#1CAC78','#178086', '#ADFF2F', '#32CD32', '#20B2AA', '#00FFFF', '#E0FFFF', '#00CED1', 
'#48D1CC', '#AFEEEE', '#4682B4', '#000080', '#00008B', '#4169E1', '#8A2BE2', '#4B0082', 
'#9400D3', '#DDA0DD', '#DA70D6', '#FF69B4', '#FFB6C1', '#FAEBD7', '#F5F5DC', '#FFEBCD', 
'#FAFAD2', '#8B4513', '#A0522D', '#D2691E', '#FFE4E1', '#FFF0F5', '#FAF0E6', '#FFEFD5', 
'#E6E6FA', '#F8F8FF', '#F0FFF0', '#FFFFF0','#FFFFFF','#CFCFCF','#ABABAB','#838485','#494A4A',
'#000000','#CB4154','#FF9BAA','#EF98AA','#EE204D','#EE204D','#FC89AC','#FF1DCE','#C364C5',
'#9D81BA','#7366BD','#5D76CB','#1F75FE'];


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
  var colorSymbols = document.getElementsByClassName("paletteCell");    

  for (var i = 0; i < colorSymbols.length; i++) {
    colorSymbols[i].style.backgroundColor = colorCodes[i];
  }    
  console.log(colorSymbols);    
}

paletteGrid(4,5);
canvasGrid(15,15);
////////////////////////////////////////////////////////////

