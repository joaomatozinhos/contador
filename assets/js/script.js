const data = document.getElementById('input-data')
const btnIniciar = document.getElementById('btn-iniciar')
const btnReinicar = document.getElementById('btn-reiniciar')
const displayContagem = document.getElementById('contagem')

displayContagem.style.opacity = '0'
btnReinicar.style.opacity = '0'

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

  setInterval(calcularDiferenca, 1000)
}

let contagem

function calcularDiferenca() {
  displayContagem.style.opacity = '1'
  btnReinicar.style.opacity = '1'

  let dataFinal = new Date(ano, mes, dia)
  let dataAtual = new Date()

  contagem = dataFinal.getTime() - dataAtual.getTime()

  organizarContagem()
}

const diasRestantes = document.getElementById('num-dias')
const horasRestantes = document.getElementById('num-horas')
const minutosRestantes = document.getElementById('num-minutos')
const segundosRestantes = document.getElementById('num-segundos')

function organizarContagem() {
  let diasRestantes = Math.floor(contagem / (24 * 60 * 60 * 1000))
  let horasRestantes = Math.floor(contagem / (60 * 60 * 1000)) % 24
  let minutosRestantes = Math.floor(contagem / (60 * 1000)) % 60
  let segundosRestantes = Math.floor(contagem / 1000) % 60

  diasRestantes = diasRestantes < 10 ? '0' + diasRestantes : diasRestantes
  horasRestantes = horasRestantes < 10 ? '0' + horasRestantes : horasRestantes
  minutosRestantes =
    minutosRestantes < 10 ? '0' + minutosRestantes : minutosRestantes
  segundosRestantes =
    segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes

  let tempo = [
    diasRestantes,
    horasRestantes,
    minutosRestantes,
    segundosRestantes
  ]

  iniciarContagem(tempo)
}

function iniciarContagem(tempo) {
  diasRestantes.innerHTML = tempo[0]
  horasRestantes.innerHTML = tempo[1]
  minutosRestantes.innerHTML = tempo[2]
  segundosRestantes.innerHTML = tempo[3]
}
