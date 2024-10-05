let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let  sum = document.getElementById("sum-el")
console.log(sum)

function add() {
    let result = num1 + num2
    sum.textContent = "SUM : "+ result
    
}

function multiple() {
    let result = num1 * num2
    sum.textContent ="Multiple : "+result
}

function subtarct() {
    let result = num1 - num2
    sum.textContent ="Subtract : "+result
}

function divide() {
    let result = num1 / num2
    sum.textContent ="Divide : "+result
}