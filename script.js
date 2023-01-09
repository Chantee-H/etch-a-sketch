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


const userInput = document.getElementById('number');

function updateGrid(){
    if(userInput.value <= 100 && userInput.value > 0){
        gridContainer.innerHTML = '';
        gridContainer.style.gridTemplateColumns = `repeat(${userInput.value}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${userInput.value}, 1fr)`;
        for(let i = 0; i < (userInput.value * userInput.value); i++){
            const div = document.createElement('div');
            gridContainer.appendChild(div).className = 'grid-item';
            div.addEventListener('mouseover', squareColor);
        }
    }else{
        alert('Only type a value from 1 - 100');
    }
}

userInput.addEventListener('change', updateGrid);

const color = document.getElementById('color');

function squareColor(e){
    let chooseColor = color.value;
    e.target.style.backgroundColor = chooseColor;
}

const reset = document.getElementById('reset');

reset.addEventListener('click', function(){
    gridContainer.innerHTML = '';
    userInput.value = '';
    gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
    gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)';
    makeGrid();
})
