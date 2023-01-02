/* 
O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional. 
*/

/*
Bora praticar e rever tudo o que foi ensinado na aula? 
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/

alert ("Olá usuário! A seguir, peço que insira dois números de sua escolha.");
let firstNumber = prompt ("Insira o primeiro número");
let secondNumber = prompt ("Insira o segundo número");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const rest = firstNumber % secondNumber;

alert("A soma dos dois números é: " + sum);
alert("A subtração dos dois números é: " + sub);
alert("A multiplicação dos dois números é: " + multi);
alert("A divisão dos dois números é: " + div);
alert("O resto da divisão dos dois números é: " + rest);

result = sum / 2 
if(sum & 1){
  alert("A soma dos dois números é ímpar: " + sum);
} else {
  alert("A soma dos dois números é par: " + sum);
}

let = firstNumber === secondNumber
if(firstNumber === secondNumber){
  alert("Os dois números inseridos por você são iguais.")} else {
  alert("Os dois números inseridos por você são diferentes.")
  }

alert("Obrigado!")  
  

