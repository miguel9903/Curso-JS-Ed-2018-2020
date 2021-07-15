// Debugging


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(e.target.number1.value != "" && e.target.number2.value != "") {
        const num1 = parseInt(e.target.number1.value);
        const num2 = parseInt(e.target.number2.value);
        const res = num1 + num2;
        result.textContent = `${num1} + ${num2} = ${res}`;
        form.reset();
    }
})