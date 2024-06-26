let contador = 1;

console.log("Contando de 1 até 10:");
while (contador <= 10){
    console.log(contador);
    contador++;
}

contador = 10;

console.log("Contando de 10 até 0:")
while (contador >= 0){
    console.log(contador);
    contador--;
}

contador = prompt("Vamos fazer uma contagem regressiva. Digite um número:")
while (contador >= 0){
    console.log(contador);
    contador--;
}

contador = 0;
let numero = prompt("Vamos fazer uma contagem progressiva. Digite um número:")
while (contador <= numero){
    console.log(contador);
    contador++;
}