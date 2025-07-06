
//option: 2 add onclick function
function makeRed(){
     document.body.style.backgroundColor = 'red'
}

// option: 3 
const makeBlueButton = document.getElementById('make-Blue');
      makeBlueButton.onclick = makeBlue;
      function makeBlue(){
        document.body.style.backgroundColor = 'blue';
      }

