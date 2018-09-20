var grid = document.querySelector('.grid-container')
var palette = document.querySelectorAll('.colorPalette')
console.log(grid)

var brushColor = ""

for (let i=0; i<2622; i++) {
    var canvas = document.createElement('div')
    grid.appendChild(canvas)
    canvas.setAttribute("class", "grid")
    canvas.addEventListener('click', changeBrush) 
}

for (let i=0; i < palette.length; i++) {
    palette[i].addEventListener('click', storePaletteColor)
}
        
function changeBrush(event) {
    event.target.style.background = brushColor;
}

function storePaletteColor(event) {
    brushColor = event.target.id
}