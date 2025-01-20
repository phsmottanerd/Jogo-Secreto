litaDeNumrosSorteados =[];
let  numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
}

function exibirMenssagemInicial() {
   exibirTextoNaTela('h1', 'Jogo do número secreto');
   exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMenssagemInicial();

function verificarChute() {
   let chute = document.querySelector('input').value;
   if (chute == numeroSecreto) {  
      exibirTextoNaTela('h1', 'Acertou');
      let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      if (chute > numeroSecreto) {
         exibirTextoNaTela('p', 'O número é menor');
      } else {
         exibirTextoNaTela('p', 'O número é maior');
      }
      tentativas++;
      limparCampo();
   }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * 3 + 1);
   let quantidadeDeElementosnaLista = listaDeNumerosSorteados.length;

   if(quantidadeDeElementosnaLista == 3){
listaDeNumerosSorteados =[];

   }

   if(litaDeNumrosSorteados.includes(numeroEscolhido)){
   return gerarNumeroAleatorio();
}else{
   litaDeNumrosSorteados.push(numeroEscolhido);
   console.log(litaDeNumrosSorteados);
   return numeroEscolhido;
}
}

function limparCampo() {
  let chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMenssagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
}
