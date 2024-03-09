const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const result = document.getElementById('result');

plus.onclick = () => {
    let sum = Number(firstNumber.value) + Number(secondNumber.value);
    result.textContent = sum;
}
minus.onclick = () => {
    let sum = Number(firstNumber.value) - Number(secondNumber.value);
    result.textContent = sum;
}

console.log('hello world');