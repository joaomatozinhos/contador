const data = document.getElementById('input-data')
const btnIniciar = document.getElementById('btn-iniciar')

btnIniciar.addEventListener('click', iniciarContagem)

function iniciarContagem() {
  let dataValor = data.value
  let dataArray = dataValor.split('-')
  let dia = Number(dataArray[2])
  let mes = Number(dataArray[1]) - 1
  let ano = Number(dataArray[0])

  let dataAtual = new Date()

  let dataFinal = new Date(ano, mes, dia)
  console.log(dataFinal)
  console.log(dataAtual)
  let resultado = dataFinal - dataAtual
  console.log(resultado)

  const dias = Math.floor(result / 1000 / 60 / 60 / 24)

  window.location.href = 'contador.html'
}
