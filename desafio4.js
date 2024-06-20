//1
console.log("Boas-vindas!");

//2
let nome = "Fernando";
console.log(`Olá, ${nome}!`);

//3
alert(`Olá, ${nome}!`);

//4
let linguagemFavorita = prompt("Qual é a sua linguagem de programação favorita?");
console.log(`Sua linguagem favorita de programação é ${linguagemFavorita}`);

//5
let valor1 = 5;
let valor2 = 7;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//6
resultado = valor1 - valor2;
console.log(`A subtração de ${valor1} menos ${valor2} é igual a ${resultado}`);

//7
let idade = prompt("Informe sua idade:");
if (idade >= 18){
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.")
}

//8
let numero = prompt("Informe um número:")
if (numero > 0){
    console.log(`O número ${numero} é positivo`);
} else {
    if (numero == 0){
        console.log(`O número ${numero} é neutro`)
    } else {
        console.log(`O número ${numero} é negativo`)
    }
}

//9
let contador = 1;
console.log("Contando de 1 até 10");
while (contador <= 10){
    console.log(contador);
    contador++;
}

//10
let nota = parseInt(Math.random() * 10)
console.log(`Sua nota foi ${nota}`)
if (nota >= 7){
    console.log("Você está aprovado.");
} else {
    console.log("Você foi reprovado");
}

//11
console.log(`Exibindo um número aleatório: ${Math.random()}`)

//12
console.log(`Exibindo um número aleatório entre 1 e 10: ${parseInt(Math.random() * 10 + 1)}`)

//13
console.log(`Exibindo um número aleatório entre 1 e 1000: ${parseInt(Math.random() * 1000 + 1)}`)