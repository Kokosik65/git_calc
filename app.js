const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const plus = document.getElementById('plus');
const result = document.getElementById('result');

plus.onclick = () => {
    let sum = Number(firstNumber.value) + Number(secondNumber.value);
    result.textContent = sum;
}