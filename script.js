//get display
const display= document.getElementById("display");
function appendToDisplay(input){
  display.value += input;
}
    
//clear display function
function clearDisplay(){
 display.value = "";
}
//calculate function
function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value ='Syntax Error';

  }
}