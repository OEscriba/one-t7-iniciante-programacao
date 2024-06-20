let diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == "Sábado" || "Domingo"){
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

let numero = prompt('Digite qualquer número inteiro: ');
if (numero >= 0){
    alert('O número que você digitou é positivo');
} else{
    alert('O número que você digitou é negativo');
}

let pontuacao = prompt("Digite sua pontuação no jogo:");
if (pontuacao >= 100){
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar');
}

let saldo = 503.45
alert(`O saldo atual da sua conta é R$${saldo}`);

let nome = prompt('Digite seu nome:');
alert(`Boas-vindas, ${nome}!`);