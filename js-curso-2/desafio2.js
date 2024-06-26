//1
function cumprimentar() {
    console.log('Olá, mundo!');
}

cumprimentar();


//2
function cumprimentarPessoa(nome) {
    console.log(`Olá, ${nome}!`);
}

cumprimentarPessoa('Fernando');


//3
function dobrarNumero(numero) {
    return numero * 2;
}

let numeroDobrado = dobrarNumero(10);
console.log(numeroDobrado);


//4
function mediaAritmetica(numero1, numero2, numero3) {
    let media = (numero1 + numero2 + numero3) / 3;
    return media;
}

let resultadoMedia = mediaAritmetica(5,6,7);
console.log(resultadoMedia);


//5
function encontrarMaiorNumero(numero1, numero2) {
    console.log('Comparando números')
    if (numero1 > numero2) {
        console.log(`O número ${numero1} é maior que o número ${numero2}.`);
    } else if (numero2 > numero1) {
        console.log(`O número ${numero2} é maior que o número ${numero1}.`);
    } else
        console.log('Os números são iguais');
}


//6
function elevarAoQuadrado(numero) {
    return numero*numero;
}

let numeroAoQuadrado = elevarAoQuadrado(5);
console.log(numeroAoQuadrado);