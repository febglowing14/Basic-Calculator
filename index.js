
//document.getElementById("num1-el").textContent = num1
let num1, num2 
//document.getElementById("num2-el").textContent = num2
let  sum = document.getElementById("sum-el")
console.log(sum)
function getvalues(){
     num1 = parseFloat(document.getElementById("num1").value);
     num2 = parseFloat(document.getElementById("num2").value);

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
    let result = num1 * num1
    sum.textContent = "Square :" + result 

}
function squareRoot() {
    getvalues();
    let result = Math.sqrt(num1);
    sum.textContent = "SQUARE ROOT: " + result;
}
