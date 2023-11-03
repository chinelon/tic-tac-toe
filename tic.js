const boxes = document.querySelectorAll('.box');
//using the querySelectorAll property to access all the boxes. The querySelectorAll property returns an array of the elements. 
const text = document.querySelector('#heading');
const strategy = document.querySelector('#strategy');
const restartBtn = document.querySelector('#restart');

function drawBoard(){
    boxes.forEach((box, i) => {
        let styleString = '';
        if (i < 3) {
          styleString += 'border-bottom: 3px solid var(--text);';
        }
        if (i % 3 === 0) {
          styleString += 'border-right: 3px solid var(--text);';
        }
        if (i % 3 === 2) {
          styleString += 'border-left: 3px solid var(--text);';
        }
        if (i > 5) {
          styleString += 'border-top: 3px solid var(--text);';
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    });
}