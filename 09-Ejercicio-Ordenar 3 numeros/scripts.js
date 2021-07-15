// Ejercicio: Ordenar 3 numeros

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const msj = document.getElementById("msj");
const input = document.getElementById("input");
const result = document.getElementById("result");
const btn_ordenar = document.getElementById("btn_ordenar");

btn_ordenar.addEventListener("click", function(){
   if(num1.value.length == 0 || num2.value.length == 0 || num3.value.length == 0) {
     msj.style.display = 'inline';
   } else {
     msj.style.display = 'none';
     let n1 = parseInt(num1.value);
     let n2 = parseInt(num2.value);
     let n3 = parseInt(num3.value);

     input.textContent = `Numeros ingresados: ${n1}, ${n2} y ${n3}`;
     result.textContent = ordenarNumeros(n1, n2, n3);
   }
});

function ordenarNumeros (n1, n2, n3) {
    let resultado = '';
    if (n1 >= n2 && n1 >= n3) {
        if (n2 > n3) {
            resultado = `Numeros ordenados: ${n1}, ${n2} y ${n3}`;
        } else {
            resultado = `Numeros ordenados: ${n1}, ${n3} y ${n2}`;
        }
    } else if (n2 >= n1 && n2 >= n3) {
        if (n1 > n3) {
            resultado = `Numeros ordenados: ${n2}, ${n1} y ${n3}`;
        } else {
            resultado = `Numeros ordenados: ${n2}, ${n3} y ${n1}`;
        }
    } else if (n3 > n1 && n3 > n2) {
        if (n1 > n2) {
            resultado = `Numeros ordenados: ${n3}, ${n1} y ${n2}`;
        } else {
            resultado = `Numeros ordenados: ${n3}, ${n2} y ${n1}`;
        }
    }
    return resultado;
}