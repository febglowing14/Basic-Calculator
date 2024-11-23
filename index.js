let activeInput = null;
//document.getElementById("num1-el").textContent = num1
let num1, num2 
//document.getElementById("num2-el").textContent = num2
let  sum = document.getElementById("sum-el")
console.log(sum)

function setActiveInput(inputId) {
    activeInput = inputId;
}
function getvalues(){
     num1 = parseFloat(document.getElementById("num1").value);
     num2 = parseFloat(document.getElementById("num2").value);

}
function zero(){
    if (activeInput) {
        document.getElementById(activeInput).value = 0; // Update the active input field
    } else {
        alert("Please select an input box first."); // If no box is selected
    }
}

function one(){
    if (activeInput) {
        document.getElementById(activeInput).value = 1; // Update the active input field
    } else {
        alert("Please select an input box first."); // If no box is selected
    }
}
function two(){
    if (activeInput) {
        document.getElementById(activeInput).value = 2; // Update the active input field
    } else {
        alert("Please select an input box first."); // If no box is selected
    }
}
function Three(){
    if (activeInput) {
        document.getElementById(activeInput).value = 3; // Update the active input field
    } else {
        alert("Please select an input box first."); // If no box is selected
    }
}
function Four(){
    if (activeInput) {
        document.getElementById(activeInput).value = 4; // Update the active input field
    } else {
        alert("Please select an input box first."); // If no box is selected
    }
}
function Five(){
    if (activeInput) {
        document.getElementById(activeInput).value = 5; // Update the active input field
    } else {
        alert("Please select an input box first."); // If no box is selected
    }
}
function Six(){
    if (activeInput) {
        document.getElementById(activeInput).value = 6; // Update the active input field
    } else {
        alert("Please select an input box first."); // If no box is selected
    }
}
function Seven(){
    if (activeInput) {
        document.getElementById(activeInput).value = 7; // Update the active input field
    } else {
        alert("Please select an input box first."); // If no box is selected
    }
}
function Eight(){
    if (activeInput) {
        document.getElementById(activeInput).value = 8; // Update the active input field
    } else {
        alert("Please select an input box first."); // If no box is selected
    }
}
function Nine(){
    if (activeInput) {
        document.getElementById(activeInput).value = 9; // Update the active input field
    } else {
        alert("Please select an input box first."); // If no box is selected
    }
}







function add() { 
    getvalues()
    let result = num1 + num2
    sum.textContent = "SUM : "+ result
    
}

function multiply() {
    getvalues()
    let result = num1 * num2
    sum.textContent ="Multiple : "+result
}

function subtract() {
    getvalues()
    let result = num1 - num2
    sum.textContent ="Subtract : "+result
}

function divide() {
    getvalues()
    let result = num1 / num2
    sum.textContent ="Divide : "+result
}
function square(){
    getvalues()
    if (activeInput) {
       
        let numberone = parseFloat(document.getElementById(activeInput).value);
        let result = numberone * numberone
        document.getElementById(activeInput).value = result // Update the active input field
        sum.textContent = "Square :" + result 
    } else {
        alert("Please select an input box first."); // If no box is selected
    }
    
   

}
function squareRoot() {
    getvalues();
    let result = Math.sqrt(num1);
    sum.textContent = "SQUARE ROOT: " + result;
}

