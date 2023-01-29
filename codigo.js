class Calculadora{
    constructor(){
    }
sumar(num1, num2){
    return parseInt(num1) + parseInt(num2);
}
restar(num1, num2){
    return parseInt(num1) - parseInt(num2);
}
dividir(num1, num2){
    return parseInt(num1) / parseInt(num2);
}
muliplicar(num1, num2){
    return parseInt(num1) *  parseInt(num2);
}
potenciar(num, exp){
    return parseInt(num) ** parseInt(exp);
}
raizCuadrada(rad){
    return Math.sqrt(rad);

}
raizCubica(rad){
    return Math.cbrt(rad);
}
}
const calculadora = new Calculadora();

alert('¿Que operación quieres realizar?');

const operacion = prompt('1: suma, 2: resta, 3: división, 4: multiplicación, 5: potenciación, 6: raíz cuadrada, 7: raíz cúbica');

if (operacion == 1){
    let numero1 = prompt('Primer número para sumar');
    let numero2 = prompt('Segundo número para sumar');
    resultado = calculadora.sumar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 2){
    let numero1 = prompt('Primer número para restar');
    let numero2 = prompt('Segundo número para restar');
    resultado = calculadora.restar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 3){
    let numero1 = prompt('Primer número para dividir');
    let numero2 = prompt('Segundo número para dividir');
    resultado = calculadora.dividir(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 4){
    let numero1 = prompt('Primer número para multiplicar');
    let numero2 = prompt('Segundo número para multiplicar');
    resultado = calculadora.muliplicar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 5){
    let numero1 = prompt('Número Base');
    let numero2 = prompt('Número Exponente');
    resultado = calculadora.potenciar(numero1, numero2);
    alert(`Tu resultaado es ${resultado}`);
}
else if (operacion == 6){
    let radicando = prompt('Escribe el radicando');
    resultado = calculadora.raizCuadrada(radicando);
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 7){
    let radicando = prompt('Escribe el radicando');
    resultado = calculadora.raizCubica(radicando);
    alert(`El resultado es ${resultado}`);
}
else{
    alert('No se ha encontrado la operación')
}