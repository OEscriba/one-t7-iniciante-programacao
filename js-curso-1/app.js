alert('Boas vindas ao jogo do número secreto :D');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 0;

// Enquanto chute não for igual número secreto
while(chute != numeroSecreto){
    tentativas++;
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    // Se o chute for igual ao número secreto, mostrar mensagem de parabéns, senão, mensagem de erro
    if (numeroSecreto == chute){
        console.log('Fluxo de acerto concluído');
        break;
    } else {
        if (numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        console.log('Fluxo de erro concluído');
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou o número ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`);

/* Forma alternativa de exibir a mensagem
if (tentativas > 1){
    alert(`Parabéns, você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`);
} else {
    alert(`Parabéns, você acertou o número ${numeroSecreto} em 1 tentativa!`);
}
*/
