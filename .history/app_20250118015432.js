let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);  // Corrigido para querySelector
   campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function verificarChute() {
    console.log('Número secrerto');
}
function gerarNumeroAleatorio(){
 return parseInt(Math.random() * 10 +1);
}
