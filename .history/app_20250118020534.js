let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);  // Corrigido para querySelector
   campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10' );

function verificarChute() {
   let chute = document.querySelector('input').value
    console.log('Número secrerto' == numeroSecreto');
}
function gerarNumeroAleatorio(){
 return parseInt(Math.random() * 10 +1);
}
