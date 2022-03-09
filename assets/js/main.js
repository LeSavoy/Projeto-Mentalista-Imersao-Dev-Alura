let numeroSecreto = Math.floor(Math.random() * 11)
let contagem = 0

function Chutar() {
  let elementoResultado = document.getElementById("resultado")
  let elementoResposta = document.getElementById("resposta")
  let chute = parseInt(document.getElementById("valor").value)
  
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = `Você acertou, o número correto é ${numeroSecreto}`
    elementoResposta.innerHTML = `Você precisou de ${contagem} chutes para acertar`
    }
  else if (chute > 10 || chute < 1) {  
    elementoResultado.innerHTML = "Digite um número entre 0 e 10!"
    
  } else {
    elementoResultado.innerHTML = "Você errou"
    contagem += 1
    elementoResposta.innerHTML = `Contagem de Erros: ${contagem}`
  } 
}