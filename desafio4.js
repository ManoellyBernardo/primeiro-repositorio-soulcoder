
const peso = parseFloat(prompt("Qual é o seu peso ?"))
const altura = parseFloat(prompt("Qual é a sua altura ?"))

const IMC = peso/(altura * altura)

if (IMC < 18.5) {
    alert("Você está abaixo do peso!")
}else if (IMC >= 18.5 && IMC <25) {
    alert("Você está com o peso normal.")
}else if (IMC >= 25 && IMC <30) {
    alert("Você está com sobrepeso.")
}else {
    alert("Você está com obesidade!")
}