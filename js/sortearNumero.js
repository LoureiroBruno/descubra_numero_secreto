
/** atribuindo os valores das constantes de menor e maior valor */
const menorValor = 1
const maiorValor = 1000


/** obtendo os elementos do html menor e maior valor */
const elementoMenorValor = document.querySelector('#menor-valor')
const elementoMaiorValor = document.querySelector('#maior-valor')


/** atribuindo os valores das constantes de menorValor e maiorValor as constantes de elementMenorValor e elementMaiorValor */
elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor


/** atribuindo a const p/ função  */
const numeroSecreto = gerarNumeroAleatorio()

/** gera valores de números aleatórios */
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1) /** gerando numero aletatório e convertendo o valor p/ número inteiro */
}