//let titulo =document.querySelector('h1');
//titulo.innerHTML ='Jogo do número secreto';

//let paragrafo =document.querySelector('p');
//paragrafo.innerHTML ='Escolha um número entre 1 e 10';

function exibirTextoNaTela (tag,texto){
   let campo =document.queriSeletor(tag)
   campo.innerHTML = texto;
}
exibirTextoNaTela ('h1','texto');
exibirTextoNaTela('p','texto');
 function verificarChute(){
    console.log('O botão foi clicado');
 }