//1
function calcularIMC(altura, peso) {
    let imc = peso / (altura*altura);
    return imc;
}


//2
function calcularFatorial(numero) {
    let contador = numero;
    let fatorial = 1;
    while (contador > 0) {
        fatorial = fatorial * contador;
        contador--;
    }
    return fatorial;
}

let resultadoFatorial = calcularFatorial(6);
console.log(resultadoFatorial);


//3
function converterDolarParaReal(valorDolar, cotacaoDolar) {
    let valorReal = valorDolar * cotacaoDolar;
    return valorReal;
}

let conversaoParaReal = converterDolarParaReal(7.6, 4.8);
console.log(conversaoParaReal)


//4
function calcularAreaPerimetroRetangulo(altura, largura) {
    let area = altura * largura;
    let perimetro = (altura * 2) + (largura * 2);
    
    console.log(`A área do retângulo é ${area}`)
    console.log(`O perímetro do retângulo é ${perimetro}`)
}

calcularAreaPerimetroRetangulo(3, 5);


//5
function calcularAreaPerimetroCirculo(r) {
    const pi = 3.14;
    let area = pi * r * r;
    let perimetro = 2 * pi * r;
    
    console.log(`A área do círculo é ${area}`)
    console.log(`O perímetro do círculo é ${perimetro}`)
}

calcularAreaPerimetroCirculo(5);


//6
function mostrarTabuada(numero){
    console.log(`Esta é a tabuada do número ${numero}:`)
    let contador = 1;
    while (contador <= 10) {
        console.log(`${numero} X ${contador} = ` + numero * contador);
        contador++;
    }
}

mostrarTabuada(7);