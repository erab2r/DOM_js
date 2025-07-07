
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

//option: 4

const pinkButton = document.getElementById('make-pink');
        pinkButton.addEventListener('click',makePink);

        function makePink(){
            document.body.style.backgroundColor = 'pink';
        }

//option 4 another 
const makeGreenButton = document.getElementById('make-green');
      makeGreenButton.addEventListener('click',function makeGreen(){
        document.body.style.backgroundColor = 'green';
      })     
      
//option 5 
 document.getElementById('make-yellow').addEventListener('click',function(){
            document.body.style.backgroundColor = 'goldenrod';
         })      