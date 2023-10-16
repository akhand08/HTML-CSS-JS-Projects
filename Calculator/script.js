let string = "";
const buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach( (button) => {
  button.addEventListener('click', (event) => {
    if (event.target.innerHTML == '=') {
      string = eval(string);
      console.log(string);
      document.querySelector('input').value = string;
      
    }
    
    else if ( event.target.innerHTML == 'AC') {
      string = "";
      document.querySelector('input').value = string;
      
    }
    else {
      console.log(event.target.innerHTML);
      string  = string + event.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
    
     
})