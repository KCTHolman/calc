buttons = document.getElementsByClassName('button');
var arrShow = [...buttons];
var displayInput = document.getElementsByClassName('display-input')[0];
var displayOutput = document.getElementsByClassName('display-output')[0];
var calculator = document.getElementsByClassName('calculator')[0];
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
        calculator.classList.remove('devil');
        calculator.classList.remove('esje');
        calculator.classList.remove('koen');
        calculator.classList.remove('jelle');
    }
    equals.addEventListener('click', calculate);
    function calculate() {
        displayOutput.innerHTML = eval(displayInput.innerHTML);
       jokes();
    }
})

function jokes() {
    //console.log(displayOutput.innerHTML);
    switch (displayOutput.innerHTML) {
        case '666':
        calculator.classList.add('devil');
        break;
        case '1967':
        calculator.classList.add('esje');
        break;
        case '1995':
        calculator.classList.add('koen');
        break;
        case '-20':
        calculator.classList.add('jelle');
        break;
    }
}