const data = document.getElementById('input-data')
const btnIniciar = document.getElementById('btn-iniciar')
const displayContagem = document.getElementById('contagem')
const text = document.querySelector('.text')

displayContagem.style.opacity = '0'
text.style.opacity = '0'

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

let diferencaTempo

function calcularDiferenca() {
  displayContagem.style.opacity = '1'
  text.style.opacity = '1'

  let dataFinal = new Date(ano, mes, dia)
  let dataAtual = new Date()

  diferencaTempo = dataFinal.getTime() - dataAtual.getTime()

  organizarContagem()
}

const dias = document.getElementById('num-dias')
const horas = document.getElementById('num-horas')
const minutos = document.getElementById('num-minutos')
const segundos = document.getElementById('num-segundos')

function organizarContagem() {
  let diasRestantes = Math.floor(diferencaTempo / (24 * 60 * 60 * 1000))
  let horasRestantes = Math.floor(diferencaTempo / (60 * 60 * 1000)) % 24
  let minutosRestantes = Math.floor(diferencaTempo / (60 * 1000)) % 60
  let segundosRestantes = Math.floor(diferencaTempo / 1000) % 60

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
  dias.innerHTML = tempo[0]
  horas.innerHTML = tempo[1]
  minutos.innerHTML = tempo[2]
  segundos.innerHTML = tempo[3]
}
