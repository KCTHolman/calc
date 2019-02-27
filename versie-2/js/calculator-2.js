buttons = document.getElementsByClassName('button');
var arrShow = [...buttons];
var displayInput = document.getElementsByClassName('display-input')[0];
var displayOutput = document.getElementsByClassName('display-output')[0];
var reset = document.getElementsByClassName('reset')[0];
var equals = document.getElementsByClassName('equals')[0];

arrShow.forEach(function (element) {   
    element.addEventListener("click", showInput);
    function showInput() {
        displayInput.innerHTML += element.innerHTML;  
    }
    reset.addEventListener('click', makeEmpty);
    function makeEmpty() {
        displayInput.innerHTML = null;
        displayOutput.innerHTML = null;
    }
    equals.addEventListener('click', calculate);
    function calculate(){
        displayOutput.innerHTML = eval(displayInput.innerHTML);
    }
});