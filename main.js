const mydiv=document.querySelector('#left');
const colorinput=document.querySelector('input');

const rannumber1=Math.floor(Math.random() * 2 );
const rannumber2=Math.floor(Math.random() * 10 );
const rannumber3=Math.floor(Math.random() * 10 );


const hash = "#"+rannumber1+rannumber2+rannumber3;

function myFunction2() {
    mydiv.style.backgroundColor= hash;
  }
  function myFunction1() {
    colorinput.textContent = "skdnsk"
  }
  var button = document.querySelector("button");
  button.addEventListener("click", myFunction2);

  var input = document.querySelector("input");
  input.addEventListener("click", myFunction1);


//   var button = document.querySelector("button");
//   button.addEventListener("click", myFunction2);
//   button.addEventListener("click", myFunction1);




// document.getElementById("random").onclick = function() {myFunction1()};
// document.querySelector("button").onclick = function() {myFunction2()};
 
// mybutton.addEventListener('click', () => {
//     mydiv.style.backgroundColor= hash;
//     } );

   
    // function myFunction1() {
    //     colorinput.textContent = hash
    //   }
    


  