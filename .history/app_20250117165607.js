
function exibirTextoNaTela (tag,texto){
   let campo =document.queriSeletor(tag)
   campo.innerHTML = texto;
}
exibirTextoNaTela ('h1','texto');
exibirTextoNaTela('p','Escolha um número entre1 e 10');
 function verificarChute(){
    console.log('O botão foi clicado');
 }