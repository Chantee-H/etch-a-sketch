'use strict';

const gridContainer = document.getElementById('grid-container');

function makeGrid(){
    gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
    gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)';
    for(let i = 0; i < 256; i++){
        const div = document.createElement('div');
        gridContainer.appendChild(div).className = 'grid-item';
        div.addEventListener('mouseover', squareColor);
    }
}

makeGrid();