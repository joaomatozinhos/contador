const diasRestantes = document.getElementById('num-dias')
const horasRestantes = document.getElementById('num-horas')
const minutosRestantes = document.getElementById('num-minutos')
const segundosRestantes = document.getElementById('num-segundos')

function iniciarContagem() {
  let diasRestantes = Math.floor(contagem / (24 * 60 * 60 * 1000))
  let horasRestantes = Math.floor(contagem / (60 * 60 * 1000)) % 24
  let minutosRestantes = Math.floor(contagem / (60 * 1000)) % 60
  let segundosRestantes = Math.floor(contagem / 1000) % 60

  let tempo = [
    diasRestantes,
    horasRestantes,
    minutosRestantes,
    segundosRestantes
  ]
}
