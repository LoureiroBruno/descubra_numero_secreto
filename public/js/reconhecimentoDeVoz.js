
/** iniciando api reconhecimento de voz */
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition 

const elementoChute = document.querySelector("#chute")
const elementoErro = document.querySelector("#mnsError")

const recognition = new SpeechRecognition()
recognition.lang = "pt-Br"
recognition.start() /** iniciando o reconhecimento de voz */

/** evento acionado ao falar chama a função onSpeak   */
recognition.addEventListener("result", onSpeak)

/** obtem o valor do ouvidor no indice e repassa a função exibeChuteNaTela */
function onSpeak(evento) {
    chute = evento.results[0][0].transcript; /** captura o valor obtido durante a fala */
    exibeChuteNaTela(chute)
    verificaValorDoChute(chute)
}

/** criar os elementos no navegador com o valor obtido da função onSpeak dentro da classe box */
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `<div>Você disse:</div>
                                <span class="box">${chute}</span>`
}


/** inicia o recognition toda vez que encerra o evento de recognition */
recognition.addEventListener("end", () => recognition.start())