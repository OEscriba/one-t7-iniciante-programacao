let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemConsole() {
    console.log('O botão foi clicado');
}

function exibirMensagemAlert() {
    alert('Eu amo JS');
}

function perguntarCidade() {
    let cidade = prompt('Qual sua cidade favorita?')
    alert(`Estive em ${cidade} e lembrei de você`)
}

function somar() {
    let numero1 = parseInt(prompt('Informe o primeiro número:'))
    let numero2 = parseInt(prompt('Informe o segundo número:'))
    let soma = numero1 + numero2
    alert(`O resultado da soma foi: ${soma}`)
}
