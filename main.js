const mydiv=document.querySelector('#left');
const colorinput=document.querySelector('input');
const randombutton =document.querySelector('button');

const hexValues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']; 

randombutton.addEventListener('click', changeHex);
function changeHex() {
  let hex = '#';

  for(let i = 0; i < 6; i++){
    const index = Math.floor(Math.random() * hexValues.length)
    hex += hexValues[index];
  }

  // value.textContent = hex;
  mydiv.style.backgroundColor = hex;
}

mydiv.addEventListener('click',changeHex)

colorinput.addEventListener('keydown', (e) => {
  if(!(hexValues.includes(e.key) || e.key == 'Backspace')) e.preventDefault();
  if(!e.target.value.startsWith('#')) e.target.value = `#${e.target.value}`;
  if(e.target.value.length > 2){
    mydiv.style.backgroundColor = e.target.value + e.key;
  }
})




  