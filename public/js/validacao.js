
/** verifica se o chute possui um valor valido */
function verificaValorDoChute(chute) { 

    const numeroDoChute = parseInt(chute)

    if (chuteInvalido(numeroDoChute)) {
        const mnsError = `Valor Inválido! o seu chute deve ser um valor númerico`
        elementoChute.innerHTML += `<div class="mnsFooter">${mnsError}</div>`
        return
    }

    if (valorDoChuteMaximoMinino(numeroDoChute)) {
        const mnsError = `Valor Inválido! O seu chute deve estar entre ${menorValor} a ${maiorValor}`
        elementoChute.innerHTML += `<div class="mnsFooter">${mnsError}</div>`
        return
    }

    if (numeroDoChute === numeroSecreto) { 
        document.body.innerHTML = `<h2>Parabéns, você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar" type="button">Jogar novamente</button>`


    } else if (numeroDoChute > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }   
}

/** verifica se o valor do chute é uma string ao inves de um integer */
function chuteInvalido(numeroDoChute) {
    return Number.isNaN(numeroDoChute) /** not a number */
}

/** verifica se o valor do chute é maior ou menor do que os valores exibidos p/ o usuario */
function valorDoChuteMaximoMinino(numeroDoChute) {
    return numeroDoChute > maiorValor || numeroDoChute < menorValor /** retorna a condição true ou false */
}

document.body.addEventListener('click', e => {
    if(e.target.id === 'jogar-novamente') {
        window.location.reload();
    }

})