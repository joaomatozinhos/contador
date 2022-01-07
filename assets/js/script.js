const data = document.getElementById('input-data')
const btnIniciar = document.getElementById('btn-iniciar')

btnIniciar.addEventListener('click', definirData)

let dataValor
let dataArray
let dia
let mes
let ano

function definirData() {
  dataValor = data.value
  dataArray = dataValor.split('-')
  dia = Number(dataArray[2])
  mes = Number(dataArray[1]) - 1
  ano = Number(dataArray[0])

  calcularDiferenca()
}

let contagem

function calcularDiferenca() {
  let dataFinal = new Date(ano, mes, dia)
  let dataAtual = new Date()

  contagem = dataFinal.getTime() - dataAtual.getTime()
}

// setInterval(calcularDiferenca, 1000)
